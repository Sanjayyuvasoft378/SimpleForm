import React, { useEffect } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import "../../categories.css";

function AddMainCategory() {
  const Token = localStorage.getItem("token");
  const onSubmit = (data) => {
    // data.categoryImage = URL.createObjectURL(data.categoryImage[0]);
    // const img_url = URL.createObjectURL(state)
    // console.log("ssssss",img_url);
    // const setData = {...data,categoryImage:img_url}
    // const setData = {...data,categoryImage:data.categoryImage[0]}

    // data.categoryImage = URL.createObjectURL(data.categoryImage[0]);
    // console.log(122222, data.categoryImage);
    const setData = { ...data, categoryImage: data.categoryImage };
    console.log(123, setData);

    axios
      .post("http://127.0.0.1:8000/account/maincategory/", setData, {
        headers: { Authorization: `Bearer ${Token}` },
      })
      .then((res) => console.log(res.data));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <>
      <h1>Add Main Category here...!!!</h1>
      <div className="container">
        <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-25">
              <label htmlFor="fname">Category Name</label>
            </div>
            <div className="col-75">
              <input
                {...register("categoryName", {
                  required: "enter categoryName",
                })}
              />
              {errors.categoryName && <p>categoryName is required.</p>}
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label htmlFor="lname">Category Image</label>
            </div>
            <div className="col-75">
              <input
                type="file"
                accept="image/jpeg,image/png,image/gif"
                {...register("categoryImage", {
                  required: "enter categoryImage",
                })}
              />
              {errors.categoryImage && <p>categoryImage is required.</p>}
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="subject">Description</label>
            </div>
            <div className="col-75">
              <textarea
                {...register("description", { required: "enter description" })}
              >
                {errors.description && <p>description is required.</p>}
              </textarea>
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label htmlFor="country">StatusText</label>
            </div>
            <div className="col-75">
              <select
                id="statusText"
                {...register("statusText", {
                  required: "enter statusText",
                })}
              >
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>
            </div>
          </div>

          <div className="row">
            <input type="submit" value="Submit" />
          </div>
          <br />
        </form>
      </div>
    </>
  );
}

export default AddMainCategory;
