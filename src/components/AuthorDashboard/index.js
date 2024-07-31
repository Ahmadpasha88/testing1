import React from 'react'
import Blog from '../Blog'
import BlogManage from '../BlogManage'

const AuthorDashboard = () => {
  return (
    <div className='row'>
      <div className='text-center bg-dark-subtle py-5'>
        <h3 className='fw-bold fs-1'>Name</h3>
        <div className='col-11 col-md-8 col-lg-6 m-auto'>
          <input type='search' className='form-control' placeholder='search blogs'/>
        </div>
        
      </div>
      <div className='row col-11 col-md-10 col-lg-10 m-auto gap-2 py-3'>

       <BlogManage/>
       <BlogManage/>
       <BlogManage/>
       <BlogManage/>
        
      </div>
      
    </div>
  )
}

export default AuthorDashboard
