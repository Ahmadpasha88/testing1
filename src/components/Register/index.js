import React, { useState } from 'react';

const Register = () => {
  const [name, setName] = useState('');
  const [userName, setUserName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const registerNow = () => {
    const data = { name, userName, phoneNumber, password, confirmPassword };
    const url = 'https://your-api-endpoint.com/register'; // Replace with your actual endpoint
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
       
      <h3 className='fs-4 fw-bold mb-3'>Register</h3>
        <form autoComplete="off">
          <div>
            <label>Enter Your Name</label>
            <input
              type='text'
              placeholder='Enter Your Name'
              className='form-control mb-2 custom-placeholder'
              onChange={(e) => setName(e.target.value)}
              value={name}
              autoComplete="off"
            />
          </div>
          <div>
            <label>Enter User Name</label>
            <input
              type='text'
              placeholder='Enter User Name'
              className='form-control mb-2 custom-placeholder'
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
              autoComplete="off"
            />
          </div>
          <div>
            <label>Enter Phone Number</label>
            <input
              type='number'
              placeholder='Enter Phone Number'
              className='form-control mb-2 custom-placeholder'
              onChange={(e) => setPhoneNumber(e.target.value)}
              value={phoneNumber}
              autoComplete="off"
            />
          </div>
          <div>
            <label>Enter Password</label>
            <input
              type='password'
              placeholder='Enter Password'
              className='form-control mb-2 custom-placeholder'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              autoComplete="new-password"
            />
          </div>
          <div>
            <label>Confirm Password</label>
            <input
              type='password'
              placeholder='Confirm Password'
              className='form-control mb-2 custom-placeholder'
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              autoComplete="new-password"
            />
          </div>
          <div className='text-center'>
            <button type='button' className='btn btn-dark' onClick={registerNow}>Register Now</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
