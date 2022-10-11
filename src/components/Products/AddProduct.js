import React from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import ".././categories.css";

function AddProduct() {
    const Token = localStorage.getItem("token");
    const onSubmit = (data) => {
      // const img_url = URL.createObjectURL(state)
      // console.log("ssssss",img_url);
      // const setData = {...data,categoryImage:img_url}
      // const setData = {...data,categoryImage:data.categoryImage[0]}
      axios
        .post("http://127.0.0.1:8000/account/product/", data, {
          headers: { Authorization: `Bearer ${Token}` },
        })
        .then((res) => console.log(res.data));
    };
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();
    return (
      <>
      <h1>Add Product here...!!!</h1>
        <div className="container">
          <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
              <div className="col-25">
                <label htmlFor="fname">MainCategory Name</label>
              </div>
              <div className="col-75">
                <input
                  {...register("mainCategoryId", {
                    required: "enter mainCategoryId",
                  })}
                />
                {errors.mainCategoryId && <p>mainCategoryId is required.</p>}
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">SubCategory Name</label>
              </div>
              <div className="col-75">
                <input
                  {...register("subCategoryId", {
                    required: "enter subCategoryId",
                  })}
                />
                {errors.subCategoryId && <p>subCategoryId is required.</p>}
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Child Category Name</label>
              </div>
              <div className="col-75">
                <input
                  {...register("childCategoryName", {
                    required: "enter categoryName",
                  })}
                />
                {errors.childCategoryName && <p>categoryName is required.</p>}
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="lname">productImage</label>
              </div>
              <div className="col-75">
              <input
              type="file"
              {...register("productImage", { required: "enter productImage" })}
            />
            {errors.productImage && <p>productImage is required.</p>}
                
              </div>
            </div>
  
            <div className="row">
              <div className="col-25">
                <label htmlFor="subject">Product Name</label>
              </div>
              <div className="col-75">
                <textarea
                  {...register("productName", { required: "enter productName" })}>
                {errors.productName && <p>productName is required.</p>}
                </textarea>
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="country">Description</label>
              </div>
            <div className="col-75">
                <input
                  {...register("description", {
                    required: "enter description",
                  })}
                />
                {errors.description && <p>description is required.</p>}
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="country">Price</label>
              </div>
            <div className="col-75">
                <input
                  {...register("price", {
                    required: "enter price",
                  })}
                />
                {errors.price && <p>price is required.</p>}
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="country">Qty</label>
              </div>
            <div className="col-75">
                <input
                  {...register("qty", {
                    required: "enter qty",
                  })}
                />
                {errors.qty && <p>qty is required.</p>}
              </div>
            </div>
  
            <div className="row">
              <div className="col-25">
                <label htmlFor="country">StatusText</label>
              </div>
              <div className="col-75">
                <select id="statusText"  {...register("statusText", {
                    required: "enter statusText", 
                  })} >
                  <option value="Active">Active</option>
                  <option value="Inactive">Inactive</option>
                </select>
              </div>
            </div>
  
            <div className="row">
              <input type="submit" value="Submit" />
            </div>
            <br />
          </form>
        </div>
      </>
    );
   
  };

export default AddProduct