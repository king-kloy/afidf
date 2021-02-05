import React, { useState } from "react";
import "./css/style.css";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import ReactHtmlParser from "react-html-parser";
import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

function Edit() {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [errors, setErrors] = useState("");
  const createdAt = Date();

  const { posts, error, isLoading } = useFetch(
    "http://localhost:8000/posts/" + id
  );

  const handleEditor = (e, editor) => {
    setBody(editor.getData());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const post = { title, body, category, createdAt };
    fetch("http://localhost:8000/posts/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(post),
    })
      .then(() => {
        setSubmitted(post.title + " is edited successfully");
        setErrors("");
      })
      .catch((err) => {
        setErrors(err.message);
        setSubmitted("");
      });
  };

  return (
    <div className="edit">
      <header id="header">
        <div className="container ">
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
          {submitted && <div className="alert alert-success">{submitted}</div>}
          {errors && <div className="alert alert-danger">{errors}</div>}
        </div>
        <div className="container ">
          <ol className="breadcrumb">
            <li>
              <a href="/dashboard">Dashboard</a>
            </li>
            <li className="active ml-3">
              <a href="/posts">Posts</a>
            </li>
            <li className="active ml-3">
              <a href="/edit">Edit Post</a>
            </li>
          </ol>
        </div>
      </section>

      <div className="container mb-4">
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
            <div className="card card-default">
              <div className="card-heading main-color-bg">
                <h5 className="card-title pl-3 pt-2">Edit Page</h5>
              </div>
              <div className="card-body">
                {error && <div> {error}</div>}
                {isLoading && <div>Loading...</div>}
                {posts && (
                  <form>
                    <div className="form-group">
                      <label>Title - {id}</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Page Title"
                        value={posts.title}
                        onChange={(e) => setTitle(e.target.value)}
                      />
                    </div>
                    <div className="form-group ">
                      <label>Categories</label>
                      <select
                        className="form-control"
                        value={posts.category}
                        onChange={(e) => setCategory(e.target.value)}
                      >
                        <option>Athletics</option>
                        <option>Health</option>
                        <option>Football</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label>Body</label>
                      <CKEditor
                        editor={ClassicEditor}
                        name="content"
                        onChange={(e, editor) => handleEditor(e, editor)}
                      />
                      <div>{ReactHtmlParser(posts.content)}</div>
                    </div>
                    <div className="checkbox">
                      <label>
                        <input type="checkbox" checked /> Published
                      </label>
                    </div>
                    <input
                      type="submit"
                      className="btn btn-outline-warning btn-rounded"
                      value="Submit"
                      onClick={(event) => handleSubmit(event)}
                    />
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;
