import React from 'react'
import { Outlet } from 'react-router-dom'

function Services() {
  return (
    <div>
      <h1 className='display-1 text-center mt-5'>Services</h1>
      <Outlet />  
    </div>
  )
}

export default Services