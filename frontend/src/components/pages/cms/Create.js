import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useStoreActions } from "easy-peasy";
import {
  MDBDropdownItem,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu
} from "mdbreact";
import "./css/style.css";
import CKEditor from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Create = props => {
  let [{ content, title }, setValue] = useState("");

  const add = useStoreActions(actions => actions.add);
  const handleChange = e => {
    const { name, value } = e.target;
    title = value;
  };
  const handleEditor = (e, editor) => {
    content = editor.getData();
  };
  const handleSubmit = e => {
    add({ title, content });
    props.history.push("/blog");
  };

  console.log(content);
  return (
    <div>
      <header id="header">
        <div className="container">
          <div className="row">
            <div className="col-md-10">
              <h1>
                <span className="fas fa-cog pt-4" aria-hidden="true"></span>{" "}
                Dashboard
              </h1>
            </div>
            <div className="col-md-2 create">
              <MDBDropdown>
                <MDBDropdownToggle
                  style={{
                    borderRadius: 5,
                    color: "#fff",
                    borderColor: "#fff",
                    background: "#b6974e"
                  }}
                  className="btn btn-outline-"
                >
                  create
                </MDBDropdownToggle>
                <MDBDropdownMenu basic>
                  <MDBDropdownItem className="links">Add Page</MDBDropdownItem>
                  <MDBDropdownItem className="links">Add Post</MDBDropdownItem>
                  <MDBDropdownItem className="links">Add User</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>
            </div>
          </div>
        </div>
      </header>

      <section id="breadcrumb">
        <div className="container">
          <ol className="breadcrumb">
            <li>
              <a href="/">Dashboard</a>
            </li>
            <li className="active ml-3">Posts</li>
            <li className="active ml-3">Create Pages</li>
          </ol>
        </div>
      </section>

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
              <a href="/pages" className="list-group-item">
                <span className="fas fa-list-alt" aria-hidden="true"></span>{" "}
                Pages <span className="badge badge-pill badge-light">12</span>
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
                <h5 className="card-title pl-3 pt-2">Create Posts</h5>
              </div>
              <div className="card-body">
                <form>
                  <div className="form-group">
                    <label>Page Title</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Title"
                      name="title"
                      onChange={e => handleChange(e)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Page Body</label>
                    <CKEditor
                      editor={ClassicEditor}
                      name="content"
                      onChange={(e, editor) => handleEditor(e, editor)}
                    />
                  </div>
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" checked /> Published
                    </label>
                  </div>
                  <div className="form-group">
                    <label>Meta Tags</label>
                    <input
                      type="text"
                      className="form-control "
                      placeholder="Add Some Tags..."
                      value=""
                    />
                  </div>
                  <div className="form-group">
                    <label>Meta Description</label>
                    <input
                      type="text"
                      className="form-control lead"
                      placeholder="Add Meta Description..."
                      value="  "
                    />
                  </div>
                  {/* <Link to="/blog"> */}
                  <input
                    type="button"
                    className="btn btn-outline-warning btn-rounded"
                    value="Submit"
                    onClick={event => handleSubmit(event)}
                  />
                  {/* </Link> */}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
