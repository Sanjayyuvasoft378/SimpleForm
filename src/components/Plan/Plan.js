import React, { useEffect, useState } from "react";
import "../categories.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import PaginationPage from "../../PaginationPage";
import adminImgae from "./admin.png";
function Plan() {
    const Navigate = useNavigate();
    const [data, setData] = useState();
    const Token = localStorage.getItem("token");
    useEffect(()=>{
    axios.get("http://127.0.0.1:8000/account/plan/",{
    headers:{"Authorization":`Bearer ${Token}`}}).then((res) => {
      setData(res.data);
    });
  },[])
  
    const MaincateDelete =(id) =>{
        // console.log("first",id)
      axios.delete(`http://127.0.0.1:8000/account/plan/${id}`,{
    headers:{"Authorization":`Bearer ${Token}`}}).then((res) => {
    //   console.log("delete", res.data);
      setData(res.data);
    });
  
    }
  
    return (
      <div className="header">
        
        <div className="dropdown">
          <button type="button" className="myaccount-btn"> My Account</button>
          <div className="dropdown-content">
            <a href="/">Sign in</a>
            <a href="/register">Sign up</a>
            <a href="/forgotpassword">Change Password</a>
          </div>
          </div>
        
        <img className="img" src={adminImgae} alt="adminImage" />
        <button onClick={() => Navigate("/addplan")} className="addnewuser_btn">
          Add Plan
        </button>
        <h1>Plan</h1>
  
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">PlanName</th>
              <th scope="col">PlanValue</th>
              <th scope="col">StatusText</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          {data?.map((item, index) => {
            return (
              <tbody>
                <tr key={index}>
                  <td>
                    <p>{item.id}</p>
                  </td>
                  <td>
                    <p>{item.planName}</p>
                  </td>
                  <td>
                    <p>{item.planValue}</p>
                  </td>
                  <td>
                    <p>{item.statusText}</p>
                  </td>
                  <td>
                    <button onClick={()=>MaincateDelete(item.id)} style={{ backgroundColor: "green", padding: "7px" }}>
                      View
                    </button>
                    &nbsp;
                    <button style={{ backgroundColor: "yellow", padding: "7px" }}>
                      Edit
                    </button>{" "}
                    &nbsp;
                    <button style={{ backgroundColor: "red", padding: "7px" }}>
                      delete
                    </button>
                    &nbsp;
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
        {/* <PaginationPage /> */}
      </div>
    );
  }


export default Plan