import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:5000/login', { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === 'success') {
          navigate('/home');
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='d-flex justify-content-center align-items-center bg-light vh-100'>
      <div className='bg-white shadow p-4 rounded' style={{ width: '100%', maxWidth: '400px' }}>
        <h2 className='text-center text-primary mb-4'>Welcome Back!</h2>
        <form onSubmit={handleSubmit}>
          <div className='mb-3'>
            <label htmlFor='email' className='form-label fw-bold'>
              Email Address
            </label>
            <input
              type='email'
              id='email'
              placeholder='Enter your email'
              autoComplete='off'
              name='email'
              className='form-control'
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className='mb-3'>
            <label htmlFor='password' className='form-label fw-bold'>
              Password
            </label>
            <input
              type='password'
              id='password'
              placeholder='Enter your password'
              autoComplete='off'
              name='password'
              className='form-control'
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type='submit' className='btn btn-primary w-100'>
            Login
          </button>
        </form>
        <div className='text-center mt-3'>
          <p className='mb-1'>Don't have an account?</p>
          <Link to='/signup' className='text-primary text-decoration-none'>
            Signup
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Login;
