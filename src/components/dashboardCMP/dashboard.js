import React, { useState } from "react";
import "../registerCpm/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PaginationPage from "../PaginationPage";
import adminImgae from "../../admin.png";

function Dashboard() {
  const Navigate = useNavigate();
  const [data, setData] = useState();
  const Token = localStorage.getItem("token");
  axios.get("http://127.0.0.1:8000/store/CategoriesListAPI/").then((res) => {
    console.log("object", res.data);
    setData(res.data);
  });
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
      <button onClick={() => Navigate("/addpost")} className="addnewuser_btn">
        Add User
      </button>
      <h1>User Dashboard</h1>

      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">categoryName</th>
            <th scope="col">description</th>
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
                  <p>{item.categoryName}</p>
                </td>
                <td>
                  <p>{item.description}</p>
                </td>
                <td>
                  <p>{item.statusText}</p>
                </td>
                <td>
                  {" "}
                  <button style={{ backgroundColor: "green", padding: "7px" }}>
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

export default Dashboard;
