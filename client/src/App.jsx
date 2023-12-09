import React from 'react';
import { Routes, Route } from 'react-router-dom';
import SignUp from './Components/CreateAccount';
import Login from './Components/SignIn';
import MyCompo from "./Components/MyCompo"
import ForgetPassword from './Components/ForgetPassword';
import ResetPassword from './Components/ResetPassword';

const App = () => {
  return (
      <div className="bg-gray-200 h-screen flex items-center justify-center">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forget-password" element={<  ForgetPassword />} />
          <Route path="/MyCompo" element={<MyCompo />} />
          <Route path="/reset-password/:token" element={<ResetPassword />} />
        </Routes>
      </div>
  );
};

export default App;
