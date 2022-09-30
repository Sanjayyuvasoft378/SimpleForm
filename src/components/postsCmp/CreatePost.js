import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import './createpost.css';

export const CreatePost = () => {


  const onSubmit = (data) => {
    axios
      .post("http://127.0.0.1:8000/store/maincategory/", data)
      .then((res) => console.log(res.data));
  };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  return (
    <div className="container">
      <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
        <h4>Create Your Post Here </h4>
        <div className="form-left">
        <label htmlFor="">categoryName</label>
        <br />
        <input {...register("categoryName", { required: "enter categoryName" })} />
        {errors.categoryName && <p>categoryName is required.</p>}

        <br />

        <label htmlFor="">description</label>
        <br />
        <input {...register("description", { required: "enter description" })} />
        {errors.description && <p>description is required.</p>}

        <br />

        <label htmlFor="">StatusText</label>
        <br />
        <select name="statusText" id="statusText"
        {...register("statusText", { required: "enter statusText" })}>
  <option value="Active">Active</option>
  <option value="Inactive">Inactive</option>
</select>
</div>
        {/* <input {...register("statusText", { required: "enter Statustext" })} />
        {errors.statusText && <p>Statustext is required.</p>} */}
        <br />

        <input type="submit" className="rgsBtn" />
     
      </form>
    </div>
  );
};
export default CreatePost;
