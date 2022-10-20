import axios from 'axios'
import React from 'react'
import { useForm } from 'react-hook-form'

function AddOffer() {
    const Token = localStorage.getItem('token')
    const onSubmit=(data) =>{
        axios.post("http://127.0.0.1:8000/account/offers/",data,{
            headers:{"Authorization":`Bearer ${Token}`}}).then((res) => {
                console.log(1212,res.data)
            })
    }

    const {register, handleSubmit, formState:{errors}} = useForm();

  return (
   <>
      <h1>Add Offers here...!!!</h1>
        <div className="container">
          <form className="formWrapper" onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Offer Name</label>
              </div>
              <div className="col-75">
                <input
                  {...register("offerName", {
                    required: "enter offerName",
                  })}
                />
                {errors.offerName && <p>offerName is required.</p>}
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Offer Value</label>
              </div>
              <div className="col-75">
                <input
                  {...register("offerValue", {
                    required: "enter offerValue",
                  })}
                />
                {errors.offerValue && <p>offerValue is required.</p>}
              </div>
            </div>
            <div className="row">
              <div className="col-25">
                <label htmlFor="fname">Offer Type</label>
              </div>
              <div className="col-75">
                <input
                  {...register("offerType", {
                    required: "enter offerType",
                  })}
                />
                {errors.offerType && <p>offerType is required.</p>}
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
  )
}

export default AddOffer