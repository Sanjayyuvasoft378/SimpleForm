import React from 'react'
import '../registerCpm/Register.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
function Dashboard() {
  const navigater = useNavigate();
  const Token = localStorage.getItem('token');
  axios.get("https://react-rails-api-demo.herokuapp.com/api/v1/users",
   {headers: { Authorization: `Bearer ${Token}`}})
  .then((res) => console.log("first",res))
  return (
    
    <div className='header'>

  <button className='addnewuser_btn'>Add User</button>
      <h1>User Dashboard</h1>
      <table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  {posts?.posts?.map((item, index) => {
          return (
            <tbody>
            <tr key={index}>
              <td><p>{item.id}</p></td>
              <td><p>{item.user_id}</p></td>
              <td><p>{item.title}</p></td>
              <td><p>{item.description}</p></td>
             <td> <button style={{backgroundColor:"green",padding:"7px"}}>View</button>&nbsp;
              <button style={{backgroundColor:"yellow",padding:"7px"}} >Edit</button> &nbsp;
              <button style={{backgroundColor:"red",padding:"7px"}} >delete</button>&nbsp;
              </td>
            </tr>
            </tbody>
          );
        })}
</table>
    </div>
  )
}

export default Dashboard