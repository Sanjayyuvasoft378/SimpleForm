import React, { useState } from "react";
import "../categories.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import PaginationPage from "../../PaginationPage";
import adminImgae from "./admin.png";
function Product() {
    const Navigate = useNavigate();
    const [data, setData] = useState();
    const Token = localStorage.getItem("token");
    axios.get("http://127.0.0.1:8000/account/product/",{
    headers:{"Authorization":`Bearer ${Token}`}}).then((res) => {
      console.log("object", res.data);
      setData(res.data);
    });
  
    const MaincateDelete =() =>{
      axios.delete("http://127.0.0.1:8000/account/product/",{
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
            <a href="/forgotpassword">Change Password</a>
          </div>
          </div>
        
        <img className="img" src={adminImgae} alt="adminImage" />
        <button onClick={() => Navigate("/addproduct")} className="addnewuser_btn">
          Add Product
        </button>
        <h1>Products</h1>
  
        <table className="table table-dark">
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">MainCategoryName</th>
              <th scope="col">SubCategoryName</th>
              <th scope="col">ChildCategoryName</th>
              <th scope="col">ProductName</th>
              <th scope="col">ProductImage</th>
              <th scope="col">Description</th>
              {/* <th scope="col">MRP</th> */}
              <th scope="col">Price</th>
              <th scope="col">Qty</th>
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
                    <p>{item.mainCategoryId}</p>
                  </td>
                  <td>
                    <p>{item.subCategoryId}</p>
                  </td>
                  <td>
                    <p>{item.childCategoryId}</p>
                  </td>
                  <td>
                    <p>{item.productName}</p>
                  </td>
                  <td>
                    <img src="{item.productImage}" alt="image" />
                  </td>
                  <td>
                    <p>{item.description}</p>
                  </td>
                  <td>
                    <p>{item.price}</p>
                  </td>
                  <td>
                    <p>{item.qty}</p>
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
        {/* <PaginationPage /> */}
      </div>
    );
  }


export default Product