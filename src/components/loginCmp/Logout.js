import React from 'react'

function Logout() {
    localStorage.removeItem('user-info')
    localStorage.removeItem('token')
    localStorage.removeItem('user_id')
  return (
    <div>
        <h1>user logged out</h1>
        <button onClick={Logout}>logout</button>
    </div>
  )
}

export default Logout