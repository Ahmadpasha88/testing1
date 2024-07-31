import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='d-flex flex-column justify-content-center align-items-center'  style={{height:'100vh'}}>

        <h3 className='text-center fs-3 fw-bold' >Page Not Found Go To <Link to='/'>Home Page</Link></h3>
      
    </div>
  )
}

export default NotFound
