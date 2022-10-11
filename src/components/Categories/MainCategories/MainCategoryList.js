import React, { useState } from "react";
import "../../categories.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PaginationPage from "../../PaginationPage";
import adminImgae from "../admin.png";
function MainCategoryList() {
    const Navigate = useNavigate();
    const [data, setData] = useState();
    const Token = localStorage.getItem("token");
    axios.get("http://127.0.0.1:8000/account/maincategory/",{
    headers:{"Authorization":`Bearer ${Token}`}}).then((res) => {
      console.log("object", res.data);
      setData(res.data);
    });
  
    const MaincateDelete =() =>{
      axios.delete("http://127.0.0.1:8000/account/maincategory/",{
    headers:{"Authorization":`Bearer ${Token}`}}).then((res) => {
      console.log("object", res.data);
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
          </div>
          </div>
        
        <img className="img" src={adminImgae} alt="adminImage" />
        <button onClick={() => Navigate("/addmaincate")} className="addnewuser_btn">
          Add Maincategory
        </button>
        <h1>Main Categories</h1>
  
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">categoryName</th>
              <th scope="col">description</th>
              <th scope="col">StatusText</th>
              <th scope="col">categoryimage</th>
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
                    <p>{item.categoryName}</p>
                  </td>
                  <td>
                    <p>{item.description}</p>
                  </td>
                  <td>
                    <p>{item.statusText}</p>
                  </td>
                  <td>
                    <img src="{item.categoryImage}" alt="image" />
                    <p></p>
                  </td>
                  <td>
                    {" "}
                    <button onClick={MaincateDelete} style={{ backgroundColor: "green", padding: "7px" }}>
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
        <PaginationPage />
      </div>
    );
  }

export default MainCategoryList