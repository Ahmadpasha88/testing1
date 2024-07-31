import React, { useState } from 'react';

const Login = () => {
  const [UserName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const loginNow = () => {
    const data = { UserName, password };
    const url = 'https://your-api-endpoint.com/login'; // Replace with your actual endpoint
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    };

    fetch(url, options)
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Handle success
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error
      });
  };

  return (
    <div className='d-flex flex-column justify-content-center align-items-center' style={{ minHeight: '100vh' }}>
      <div className='shadow-lg p-3 mb-5 bg-white rounded-5 pt-5 border col-11 col-md-9 col-lg-6 mx-auto'>
        <h3 className='fs-4 fw-bold mb-3'>Login</h3>
        <form autoComplete="off">
          <div className='mb-3'>
            <label>Enter UserName</label>
            <input
              type='text'
              placeholder='ex: Jhon_doe_18'
              className='form-control mb-2 custom-placeholder'
              onChange={(e) => setUserName(e.target.value)}
              value={UserName}
              autoComplete="off"
            />
          </div>
          <div className='mb-3'>
            <label>Enter Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              className='form-control mb-2 custom-placeholder'
              autoComplete="new-password"
            />
          </div>
          <div className='text-center'>
            <button type='button' className='btn btn-dark' onClick={loginNow}>Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

