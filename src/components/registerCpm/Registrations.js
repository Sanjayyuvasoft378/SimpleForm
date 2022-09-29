import { useForm } from "react-hook-form";
import React, { useState } from "react";
import axios from 'axios';
import { Link } from "react-router-dom";
import "./Register.css";

function Registrations() {
  const onSubmit = (data) => {
    axios
      .post("http://127.0.0.1:8000/store/usersignup/",data)
      .then((res) => console.log(res.data));

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
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter first name"
                {...register("firstName", { required: "enter firstname" })} />
        {errors.firstName && <p>first name is required.</p>}
            </div>
            <div className="form-group">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter Last Name"
                {...register("lastName", { required: "enter last name" })} />
        {errors.lastName && <p>last name is required.</p>}
            </div>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                {...register("email", { required: "enter email address" })} />
        {errors.email && <p>Email is required.</p>}
            </div>
            <div className="form-group">
              <label>Mobile No.</label>
              <input
                type="number"
                className="form-control"
                placeholder="Enter mobile No"
                {...register("mobileNo", { required: "enter Mobile NO " })} />
        {errors.mobileNo && <p>Mobile No is required.</p>}
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="Address"
                className="form-control"
                placeholder="Enter Address"
                {...register("Address", { required: "enter address" })} />
        {errors.Address && <p>Address is required.</p>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                {...register("password", { required: "enter a password" })} />
        {errors.password && <p>Password is required.</p>}
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
