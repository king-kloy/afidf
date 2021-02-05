import React from "react";
import useFetch from "../cms/useFetch";
import { Link } from "react-router-dom";
import "./css/style.css";

function Dashboard() {
  const { posts } = useFetch("http://localhost:8000/posts");

  return (
    <div className="dashboard">
      <header id="header">
        <div className="container fluid ">
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
              <a href="/create" className="btn btn-outline-warning text-white">
                Add Post
              </a>
            </div>
          </div>
        </div>
      </header>
      <section id="breadcrumb ">
        <div className="container ">
          <ol className="breadcrumb">
            <li className="active ">Dashboard</li>
          </ol>
        </div>
      </section>

      <div className="container">
        <div className="row ml-5">
          <div className="col-md-3 ">
            <div className="list-group list-group-flush">
              <a
                href="/dashboard"
                className="list-group-item active main-color-bg"
              >
                <span className="fas fa-cog" aria-hidden="true"></span>{" "}
                Dashboard
              </a>
              {/* <a href="/pages" className="list-group-item">
                  <span className="fas fa-list-alt" aria-hidden="true"></span>{" "}
                  Pages <span className="badge badge-pill badge-light">12</span>
                </a> */}
              <a href="/posts" className="list-group-item">
                <span className="fas fa-pen" aria-hidden="true"></span> Posts{" "}
                <span className="badge badge-pill badge-light">33</span>
              </a>
            </div>
          </div>
          <div className="col-md-9">
            <div className="card card-default ">
              <div className="card-heading main-color-bg">
                <h5 className="card-title pt-2 pl-3">Website Overview</h5>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-md-4 justify-content-center">
                    <div
                      className="breadcrumb dash-box"
                      style={{ paddingLeft: 100 }}
                    >
                      <h2>
                        <span
                          className="fas fa-list-alt"
                          aria-hidden="true"
                        ></span>{" "}
                        12
                      </h2>
                      <br />
                      <h4>Pages</h4>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div
                      className="breadcrumb dash-box"
                      style={{ paddingLeft: 100 }}
                    >
                      <h2>
                        <span className="fas fa-pen" aria-hidden="true"></span>{" "}
                        33
                      </h2>
                      <h4>Posts</h4>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="breadcrumb dash-box">
                      <h2>
                        <span
                          className="fas fa-chart-bar"
                          aria-hidden="true"
                        ></span>{" "}
                        12,334
                      </h2>
                      <h4>Visitors</h4>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-default my-3">
              <div className="card-heading">
                <h4 className="card-title pl-3 pt-3">Latest Posts</h4>
              </div>
              <div className="card-body">
                <table className="table table-striped table-hover">
                  <tr>
                    <th>Post ID</th>
                    <th>Title</th>
                    <th>Created</th>
                  </tr>
                  <tbody>
                    {posts &&
                      posts.map((post, index) => (
                        <tr>
                          <Link to={"/edit/" + post.id} key={post.id}>
                            {" "}
                            <td>{post.id}</td>
                          </Link>
                          <td>{post.title}</td>
                          <td>{post.createdAt}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
