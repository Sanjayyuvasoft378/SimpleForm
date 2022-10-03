import { useForm } from "react-hook-form";
import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./Register.css";

function Registrations() {
  const onSubmit = (data) => {
    axios
      .post("http://127.0.0.1:8000/account/register/",data)
      .then((res) => {
        console.log(res.data)
        localStorage.setItem('userInfo',JSON.stringify(res.data))
        localStorage.setItem('token',JSON.stringify(res?.data?.token))
      } 
      );

  };

  const {register,handleSubmit,formState: { errors },} = useForm();

  return (
    <div className="container">
       <div className='rowC'>
        <div className="form-body">
        <div className="coloum">
          <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
  <div className="w-100"></div>
            <div className="header">
              <h3 style={{ width:"500px" ,boxSizing: "border-box" }}>Register Here!!!</h3>
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter Email"
                {...register("email", { required: "enter email" })} />
        {errors.firstName && <p>Email is required.</p>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                {...register("password", { required: "enter password" })} />
        {errors.lastName && <p>password is required.</p>}
            </div>
            <div className="form-group">
              <label>Confirm password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Re-Enter password"
                {...register("password2", { required: "enter password2" })} />
        {errors.password2 && <p>password2 is required.</p>}
            </div>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Name"
                {...register("name", { required: "enter Name " })} />
        {errors.name && <p>Name is required.</p>}
            </div>
            <div className="form-group">
              <label>TC</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Tc"
                {...register("tc", { required: "enter tc" })} />
        {errors.tc && <p>Tc is required.</p>}
            </div>
            
          <button  type="submit" className="btn btn-primary">
              Submit
            </button>
            <p>If you have already an acount </p>
      <p>Please signin here ...? <Link to="/"><strong>Signin</strong>
        </Link>
      </p>
          </form>
         
          </div>
        </div>
        <div className="image">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              className="img-fluid"
              alt="Sample image"
            />
          </div>
        </div>
        
    </div>
  );
}
export default Registrations;
