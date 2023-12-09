import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ForgetPassword = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState("");

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/api/forget-password', { email })
      .then(response => {
        if(response.data.sucess)
        {
            console.log(response.data.msg)
            setMessage(response.data.msg)
        }else{  
           console.log(response.data.msg)
           setMessage(response.data.msg)

        }
      })
    } catch (error) {
      console.error('Password reset request failed:', error.message);
      setMessage(error.message)
    }
  };
  
  return (
    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
  <h2 className="text-2xl font-semibold mb-6">Reset Password</h2>
  {/* ResetPassword Form content */}
  <form onSubmit={handleForgetPassword} className="flex flex-col gap-4">
    <input
      className="w-full px-3 py-2 border-b-2 border-black focus:outline-none focus:border-blue-500 mb-4"
      type="email"
      id="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      required
    />

    <button
      className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      type="submit"
    >
      Send Link
    </button>
  </form>

  <p className="mt-4">
    Remember your password?{' '}
    <Link to="/" className="text-blue-500">
      Login
    </Link>
  </p>
  <p className="mt-2">
    Don't have an account?{' '}
    <Link to="/signup" className="text-blue-500">
      Sign Up
    </Link>
  </p>
  <p className="text-red-500">{message}</p>
</div>

  );
};

export default ForgetPassword;
