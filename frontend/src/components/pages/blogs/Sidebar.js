/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

export default function Sidebar({ categories }) {
  return (
    <div className="col-md-4 mb-5">
      <div className="card mt-3">
        <h5 className="font-weight-bold p-3">Categories</h5>
        {categories &&
          categories.map((category) => <a href="">{category.name}</a>)}
      </div>
    </div>
  );
}
