import React from 'react'
import Blog from '../Blog'
import Filters from '../Filters'
import { useNavigate } from 'react-router-dom'


const Home = () => {

  const navigate = useNavigate();
  return (
    <div>
        <div className='m-3 row'>
            <Filters/>
            <div className='text-end mb-2 mt-1'>
                <button className='btn btn-dark me-2' onClick={()=>navigate('/create_post')}>Post Blog</button>
            </div>
            <div className='row gap-2'>
            <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>
        <Blog/>

            </div>
       
        </div>
    
      
    </div>
  )
}

export default Home
