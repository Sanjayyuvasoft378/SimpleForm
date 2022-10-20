import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import ".././categories.css";

function AddPlan() {
    const Token = localStorage.getItem("token");
    const onSubmit = (data) => {
      // const img_url = URL.createObjectURL(state)
      // console.log("ssssss",img_url);
      // const setData = {...data,categoryImage:img_url}
      // const setData = {...data,categoryImage:data.categoryImage[0]}
      axios
        .post("http://127.0.0.1:8000/account/plan/", data, {
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
      <h1>Add Product here...!!!</h1>
        <div className="container">
          <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Plan Name</label>
              </div>
              <div className="col-75">
                <input
                  {...register("planName", {
                    required: "enter planName",
                  })}
                />
                {errors.planName && <p>planName is required.</p>}
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Plan Value</label>
              </div>
              <div className="col-75">
                <input
                  {...register("planValue", {
                    required: "enter planValue",
                  })}
                />
                {errors.planValue && <p>planValue is required.</p>}
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="country">StatusText</label>
              </div>
              <div className="col-75">
                <select id="statusText"  {...register("statusText", {
                    required: "enter statusText", 
                  })} >
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
   
  };

export default AddPlan