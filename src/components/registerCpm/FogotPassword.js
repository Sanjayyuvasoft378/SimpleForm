import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { LocalActivity } from "@material-ui/icons";

function FogotPassword() {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const Token = localStorage.getItem('token')
    axios
      .post("http://127.0.0.1:8000/account/changePassword/", data ,{
        headers:{"Authorization":`Bearer ${Token}`}
      })
      .then((res) => console.log(res.data));
  };
  return (
    <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.min.css" />  
 <script src="https://use.fontawesome.com/f59bcd8580.js"></script>  
 <div class="container">  
 <div class="row m-5 no-gutters shadow-lg">  
 <div class="col-md-6 d-none d-md-block">  
 <img src="https://images.unsplash.com/photo-1566888596782-c7f41cc184c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80" class="img-fluid" style={{ minHeight:"100px" }} />  
 </div>  
 <div class="col-md-6 bg-white p-5">  
 <h3 class="pb-3">Reset Password</h3>  
 <div class="form-style">  
 <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>  
  <div class="form-group pb-3">    
  <label className='label'>Password</label>
              <input
                type="pasword"
                className="form-control"
                placeholder="Enter Password"
                {...register("password",{required : true})}
              />
              {errors.password && <p>Password is required.</p>}
  </div>  
  <div class="form-group pb-3">    
  <label className='label'>Re-Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Re-Enter Password"
                {...register("password2",{required : true})}
              />
              {errors.password2 && <p>Re-password is required.</p>}
  </div>  
  
   <div class="pb-2">  
  <button type="submit" class="btn btn-dark font-weight-bold mt-2">Submit</button> &nbsp; &nbsp; 
  <button  class="btn btn-dark font-weight-bold mt-2">Go Back</button>  
   </div>  
 </form>  
  
 
 </div>  
 </div>  
 </div>  
 </div>
    </div>
  );
}

export default FogotPassword;
