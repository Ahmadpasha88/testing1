
import React from 'react'
import Comments from '../Comments';



const Blog = () => {

    const blogData = [];
  return (
    <div className='col-10 col-md-5 col-lg-3 gap-2 border rounded-2 p-3 m-auto mb-3 flex-grow-1'>
    <h3 className='fw-bold fs-5 text-center my-3'>Sharemarket</h3>

    <p className='fw-medium'>Author: Ahmad</p>
    <p className='mb-0'>Published Date: 30-07-2024</p>
    <p>Time: 3:00 pm</p>
    <p> <span className='fw-bold'>
    Content:</span>  The sharemarket, also known as the stock market, is a complex and dynamic system where investors can buy and sell shares of publicly traded companies. It plays a crucial role in the economy by providing a platform for companies to raise capital and for investors to earn returns on their investments. The market is influenced by various factors, including economic data, corporate earnings, geopolitical events, and market sentiment.
    </p>
    <Comments/>
</div>

  )
}

export default Blog
