import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios';
import { useEffect } from 'react';
import { toast, ToastContainer } from "react-toastify";
import './login.css';

function Login() {
    
const [user,setUser] = useState();
    const onSubmit = (data) =>{
        console.log("ccdcdcd",data)
        axios.
        post('http://127.0.0.1:8000/store/userlogin/',data)
        .then((res) => {console.log("first",res.data)
        setUser(res.data)
        localStorage.setItem("user-info", JSON.stringify(res.data));
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user_id", res.data.user.id);})
    
    }
    console.log("check response",user)

    useEffect(() => {
      if (user?.Error && user?.Error.length !== 0) {
        toast.error(`${user.Error}`,
            { position: toast.POSITION.TOP_RIGHT })
    } else {
        if (user &&user.length !== 0 ) {
            toast.success(`${user.message}`,
                { position: toast.POSITION.TOP_RIGHT })
                window.location.href = "/dashboard";
        }
   }
}, [user])
    const {register, handleSubmit, formState:{errors}} = useForm()
    
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
 <h3 className='form-login'>Login Form</h3>  
 <div className="form-style">  
 <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>  
   
 <label>Email</label>
  <div className="form-group pb-3">  
              <input
                type="email"
                className="form-control"
                placeholder="Enter email"
                {...register("email",{required : true})}
              />
              {errors.email && <p>email is required.</p>}
  </div>     
  <label>Password</label>
  <div class="form-group pb-3"> 
              <input
                type="password"
                className="form-control"
                placeholder="Enter Password"
                {...register("password",{required : true})}
              />
              {errors.password && <p>password is required.</p>}
  </div>  
  <div class="d-flex align-items-center justify-content-between">  
 <div class="d-flex align-items-center"><input name="" type="checkbox" value="" /> <span class="pl-2 font-weight-bold">Remember Me</span></div>  
 <div><a href="/forgotpassword">Forget Password?</a></div>  
 </div>  
   <div class="pb-2">  
  <button type="submit" class="btn btn-dark w-100 font-weight-bold mt-2">Submit</button>  
   </div>  
 </form>  
  <div class="sideline">OR</div>  
  <div>  
  <button type="submit" class="btn btn-primary w-100 font-weight-bold mt-2"><i class="fa fa-facebook" aria-hidden="true"></i> Login With Facebook</button>  
  </div>  
  <div class="pt-4 text-center">  
  Get Members Benefit. <a href="/register">Sign Up</a>  
  </div>  
 </div>  
 </div>  
 </div>  
 </div>
    </div>
  )
}

export default Login