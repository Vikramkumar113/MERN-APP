import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import axios from 'axios';

const Login = () => {
 
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault();
    axios.post('http://localhost:3000/api/login', { email, password })
    .then(result => {
      if(result.data.success) {
        navigate('/MyCompo')
      } else {
        console.error(result.data.msg);
        setMessage(result.data.msg)
      }})
    .catch(err => {
      console.log(err)
      setMessage(err);
    })
  };

  return (
    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
  <h2 className="text-2xl font-semibold mb-6">Login</h2>
  {/* Login Form content */}
  <form onSubmit={handleLogin} className="flex flex-col gap-5">
    <input
      className="w-full px-3 py-3 border-b-2 border-black focus:outline-none focus:border-blue-500"
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      required
    />

    <input
      className="w-full px-3 py-3 border-b-2 border-black focus:outline-none focus:border-blue-500"
      type="password"
      id="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      required
    />

    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      type="submit"
    >
      Login
    </button>
  </form>

  <p className="mt-4">
    Don't have an account?{' '}
    <Link to="/signup" className="text-blue-500">
      Sign Up
    </Link>
  </p>
  <p className="mt-2 ">
    <Link to="/forget-password" className="text-blue-500">
      Forgot Password?
    </Link>
  </p>
  <p className='text-red-500'>{message}</p>
</div>


  );
};

export default Login;
