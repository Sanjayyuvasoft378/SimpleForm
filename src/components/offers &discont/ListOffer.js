import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function ListOffer() {
  const Token = localStorage.getItem("token");
  console.log(1222222,Token)
  const Navigate = useNavigate();
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/account/offers/", {
        headers:{"Authorization":`Bearer ${Token}`}})
      .then((res) => {
        console.log("check my response on console", res.data);
        setData(res.data);
      });
  });








  return (
    <div className="header">
      <div className="dropdown">
        <button type="button" className="myaccount-btn">
          {" "}
          My Account
        </button>
        <div className="dropdown-content">
          <a href="/">Sign in</a>
          <a href="/register">Sign up</a>
          <a href="/forgotpassword">Change Password</a>
        </div>
      </div>

      {/* <img className="img" src={adminImgae} alt="adminImage" /> */}
      <button onClick={() => Navigate("/addoffer")} className="addnewuser_btn">
        Add Offer
      </button>
      <h1>Plan</h1>

      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Offer Name</th>
            <th scope="col">Offer Value</th>
            <th scope="col">Offer Type</th>
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
                  <p>{item.offerName}</p>
                </td>
                <td>
                  <p>{item.offerValue}</p>
                </td>
                <td>
                  <p>{item.offerType}</p>
                </td>
                <td>
                  <p>{item.statusText}</p>
                </td>
                <td>
                  <button
                    style={{ backgroundColor: "green", padding: "7px" }}
                  >
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

export default ListOffer;
