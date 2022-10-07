import React from 'react'
import { useNavigate } from 'react-router-dom'

function Logout() {
  const navigate = useNavigate();
    localStorage.removeItem('user-info')
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
    window.location('/')
  return (
    <div>
        {/* <h1>user logged out</h1>
        <button onClick={Logout}>logout</button> */}
    </div>
  )
}

export default Logout