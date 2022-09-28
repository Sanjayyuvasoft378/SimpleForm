import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

function CreatePost() {
  const navigate = useNavigate();
  const Token = localStorage.getItem("token");
  console.log("hdgfhsj",Token);
  const {register,handleSubmit,formState: { errors },} = useForm();
  const onSubmit = (data) => {
    axios
      .post("https://react-rails-api-demo.herokuapp.com/api/v1/posts",{post:data}, {
        headers: { Authorization: `Bearer ${Token}` }
      })
      .then((res) => {
        console.log(res.data);
      });
  };
  return (
    <div>
      <h1>Add new post here</h1>
      <div className="container">
        <div className="rowC">
          <div className="form-body">
            <div className="coloum">
              <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
                <div className="w-100"></div>
                <div className="header">
                  <h3 style={{ width: "500px", boxSizing: "border-box" }}>
                    Register Here!!!
                  </h3>
                </div>
                <div className="form-group">
                  <label>Title</label>
                  <input
                    type="title"
                    className="form-control"
                    placeholder="Enter title"
                    {...register("title", { required: true })}
                  />
                  {errors.title && <p>title is required.</p>}
                </div>
                <div className="form-group">
                  <label>description</label>
                  <input
                    type="description"
                    className="form-control"
                    placeholder="Enter description"
                    {...register("description", { required: true })}
                  />
                  {errors.description && <p>description is required.</p>}
                </div>
                <div className="form-group">
                  <label>user_id</label>
                  <input
                    type="user_id"
                    className="form-control"
                    placeholder="Enter user_id"
                    {...register("user_id", { required: true })}
                  />
                  {errors.user_id && <p>user_id is required.</p>}
                </div>
               

                <button type="submit" onClick={()=>navigate('/dashboard')} className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
