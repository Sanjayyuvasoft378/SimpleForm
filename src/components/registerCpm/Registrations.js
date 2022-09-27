import { useForm } from "react-hook-form";
import React, { useState } from "react";
import axios from 'axios';
import "./Register.css";

function Registrations() {
  const onSubmit = (data) => {
    console.log(";;;;;;;;;;;",data);
    axios
      .post("https://react-rails-api-demo.herokuapp.com/api/v1/signup", {user:data})
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
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                {...register("email",{required : true})}
              />
              {errors.email && <p>email is required.</p>}
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                {...register("password",{required : true})}
              />
              {errors.password && <p>password is required.</p>}
            </div>
            <div className="form-group">
              <label>confirm_password</label>
              <input
                type="confirm_password"
                className="form-control"
                placeholder="Enter confirm_password"
                {...register("confirm_password",{required : true})}
              />
              {errors.confirm_password && <p>confirm_password is required.</p>}
            </div>
            {/* <div className="form-group">
              <label>Mobile no</label>
              <input
                type="mobileNo"
                className="form-control"
                placeholder="Enter mobile No"
              />
            </div>
            <div className="form-group">
              <label >Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
              />
            </div>
            <div className="form-group">
              <label>Gender</label>
              <input
                type="gender"
                className="form-control"
                placeholder="gender"
              />
            </div>
            <div className="form-group">
              <label>Address</label>
              <input
                type="address"
                className="form-control"
                placeholder="Address"
              />
            </div> */}
            
          <button  type="submit" className="btn btn-primary">
              Submit
            </button>

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
