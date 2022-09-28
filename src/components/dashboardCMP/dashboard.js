import React, { useState } from "react";
import "../registerCpm/Register.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PaginationPage from "../PaginationPage";


function Dashboard() {
  const Navigate = useNavigate();
  const [data, setData] = useState();
  const Token = localStorage.getItem("token");
  axios
    .get("https://react-rails-api-demo.herokuapp.com/api/v1/users", {
      headers: { Authorization: `Bearer ${Token}` },
    })
    .then((res) => {
      setData(res.data);
    });
  return (
    <div className="header">
      <button onClick={()=> Navigate('/addpost')} className="addnewuser_btn">Add User</button>
      <h1>User Dashboard</h1>
      
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">created_at</th>
            <th scope="col">updated_at</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        {data?.users?.map((item, index) => {
          return (
            <tbody>
              <tr key={index}>
                <td>
                  <p>{item.id}</p>
                </td>
                <td>
                  <p>{item.email}</p>
                </td>
                <td>
                  <p>{item.created_at}</p>
                </td>
                <td>
                  <p>{item.updated_at}</p>
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
