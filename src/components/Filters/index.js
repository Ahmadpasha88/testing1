import React from 'react'
import './index.css'

const Filters = () => {
  return (
    <div>
        <p className='fs-5 fw-medoum mb-0'>Filters</p>
        <div className='d-flex gap-2 custom-scrollbar'  style={{overflowX:'auto'}}>
        <div className='col-10 col-md-5 col-lg-4 m-auto'>
            <label className='col-12 text-center'>Posts</label>
            <br/>
            <select className='col-12'>
                <option value=''>All</option>
                <option value=''>Top 5 most commented posts</option>
            </select>
        </div>
        <div className='col-10 col-md-5 col-lg-4 m-auto'>
            <label className='col-12 text-center'>Authors</label>
            <br/>
            <select className='col-12'>
                <option value=''></option>
            </select>
        </div>
        </div>
     
      
    </div>
  )
}

export default Filters
