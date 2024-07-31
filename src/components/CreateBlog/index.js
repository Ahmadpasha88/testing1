import React from "react";

const CreateBlog = () => {
  return (
    <div
      className="col-11 col-md-9 col-lg-7 m-auto row d-flex flex-column justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <h3 className="fs-4 fw-bold text-center">Post Your Blog</h3>
      <div className="border rounded-3 shadow-sm p-3">
        <div className="mb-3">
          <label className="fw-medium">Enter Blog Title</label>
          <input type="text" className="form-control" placeholder="Title.." />
        </div>
        <div className="mb-3">
          <label className="fw-medium">Upload Images</label>
          <input
            type="file"
            className="form-control"
            placeholder="Add Images"
          />
        </div>
        <div className="mb-3">
          <label className="fw-medium">Add Your Content</label>
          <textarea className="form-control" placeholder="Add your blog content" cols="10" rows="4"></textarea>
        </div>

        <div className="text-center mb-3">
          <button className="btn btn-dark shadow-sm">Post</button>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
