import React, { useEffect, useState } from "react";
import "../../categories.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PaginationPage from "../../PaginationPage";
import adminImgae from "../admin.png";

function MainCategoryList() {
    const Navigate = useNavigate();
    const [data, setData] = useState();
    const Token = localStorage.getItem("token");


    const [search, setSearch] = useState();

    

    useEffect(()=>{
      axios.get("http://127.0.0.1:8000/account/maincategory/",{
    headers:{"Authorization":`Bearer ${Token}`}}).then((res) => {
      // console.log("object", res.data);
      setData(res.data);
    });
  },[])
   
  const handleSearch = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const results = !search
    ? data
    : data?.filter((item) =>
        item.postName.toLowerCase().includes(search.toLowerCase())
      );

  
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
        <div className="InputWrapper">
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search Posts"
          style={{ width: "300px" }}
        />
      </div>
  
        <table className="table table-dark">
        
          <thead>
            <tr>
              <th scope="col">Id</th>
              <th scope="col">categoryName</th>
              <th scope="col">description</th>
              {/* <th scope="col">StatusText</th> */}
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
                  {/* <td>
                    <p>{item.statusText}</p>
                  </td> */}
                  <td>
                    <img src={item.categoryImage} alt="image" />
                    <p></p>
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
      </div>
    );
  }

export default MainCategoryList