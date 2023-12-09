// ResetPasswordComponent.jsx

import React, { useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [message, setMessage] = useState("");

  const { token } = useParams();


  const handleResetPassword = async () => {
  if (newPassword === confirmNewPassword) {
    // try {
      const response = await axios.put(`http://localhost:3000/api/reset-password/${token}`, {
        password: newPassword,
      });

      if (response.data.success) {
        setMessage('Password reset successful!');
        // You may want to redirect or perform additional actions after a successful reset
      } else {
        setMessage('Password reset failed. Please try again.');
      }
    // }
    //  catch (error) {
    //   console.error('Error resetting password:', error.message);

    //   // Check if error.response is defined before accessing error.response.data
    //   if (error.response && error.response.data) {
    //     console.log('Error response from server:', error.response.data);
    //     setMessage(error.response.data.msg || 'An error occurred while resetting the password. Please try again.');
    //   } else {
    //     setMessage('An error occurred while resetting the password. Please try again.');
    //   }
    // }
  } 
  else {
    setMessage('Passwords do not match. Please try again.');
  }
};


  return (
    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 flex items-center justify-center">
    <div className="bg-white p-8 shadow-md rounded-md w-full sm:w-96">
      <h2 className="text-2xl font-bold mb-4">Reset Password</h2>

    <input
      type="password"
      id="newPassword"
      className="w-full px-3 py-2 border-b-2 border-black focus:outline-none focus:border-blue-500 mb-4"
      placeholder="New Password"
      value={newPassword}
      onChange={(e) => setNewPassword(e.target.value)}
    />

    <input
      type="password"
      id="confirmNewPassword"
      className="w-full px-3 py-2 border-b-2 border-black focus:outline-none focus:border-blue-500 mb-4"
      placeholder="Confirm New Password"
      value={confirmNewPassword}
      onChange={(e) => setConfirmNewPassword(e.target.value)}
    />

    <button
      className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue"
      onClick={handleResetPassword}
    >
      Reset Password
    </button>
    
    <p className="mt-4 text-red-500">{message}</p>
  </div>
</div>

  );
};

export default ResetPassword;


