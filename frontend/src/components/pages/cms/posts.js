import React, { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../cms/useFetch";
import "./css/style.css";

function Posts() {
  const { posts } = useFetch("http://localhost:8000/posts");
  const [deleted, setDeleted] = useState("");
  const [error, setError] = useState("");

  const handleDelete = (id, title) => {
    fetch("http://localhost:8000/posts/" + id, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then(() => {
        setDeleted(title + " is deleted successfully");
      })
      .catch((err) => {
        setError(err.message);
        setDeleted("");
      });
  };

  return (
    <div className="posts">
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <a href="/dashboard" className="text-white">
                <h1 className="mt-4">
                  <span className="fas fa-cog " aria-hidden="true"></span>
                  Dashboard
                </h1>
              </a>
            </div>
            <div className="col-md-2 create">
              <a href="/create" className="btn btn-outline-warning">
                Add Post
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="breadcrumb">
        <div className="container">
          {deleted && <div className="alert alert-success">{deleted}</div>}
          {error && <div className="alert alert-danger">{error}</div>}
        </div>
        <div className="container">
          <ol className="breadcrumb">
            <li>
              <a href="index.html">Dashboard</a>
            </li>
            <li className="active ml-3">Posts</li>
          </ol>
        </div>
      </section>

      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="list-group list-group-flush">
                <a
                  href="/dashboard"
                  className="list-group-item active main-color-bg"
                >
                  <span className="fas fa-cog" aria-hidden="true"></span>{" "}
                  Dashboard
                </a>
                <a href="/posts" className="list-group-item">
                  <span className="fas fa-pen" aria-hidden="true"></span> Posts{" "}
                  <span className="badge badge-pill badge-light">33</span>
                </a>
              </div>
            </div>
            <div className="col-md-9">
              <div className="card card-default mb-4">
                <div className="card-heading main-color-bg">
                  <h5 className="card-title pl-3 pt-2">Posts</h5>
                </div>
                <div className="card-body pb-1">
                  <div className="row">
                    <div className="col-md-12">
                      <input
                        className="form-control"
                        type="text"
                        placeholder="Filter Posts..."
                      />
                    </div>
                  </div>
                  <br />

                  <table className="table table-striped table-hover">
                    <tr>
                      <th>Post ID</th>
                      <th>Title</th>
                      <th>Created</th>
                      <th></th>
                    </tr>
                    <tbody>
                      {posts &&
                        posts.map((post, index) => (
                          <tr>
                            <td>{post.id}</td>

                            <td className="text-truncate">{post.title}</td>
                            <td>{post.createdAt}</td>
                            <td>
                              <Link to={`/edit/${post.id}`} key={post.id}>
                                {" "}
                                <button className="btn btn-success">
                                  Edit
                                </button>
                              </Link>
                              <button
                                className="btn btn-danger flat"
                                onClick={() =>
                                  handleDelete(post.id, post.title)
                                }
                              >
                                Delete
                              </button>
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Posts;
