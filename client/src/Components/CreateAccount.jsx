import React, { useState } from "react";
import { Link } from "react-router-dom"; // Add this import
import axios from "axios"; // Make sure axios is imported
import { useNavigate } from "react-router-dom";

const SignUp = () => {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate()

  const handleSignUp = async (e) => {
    e.preventDefault();

    // Simple validation checks
    if (!email || !password) {
     setMessage('Please fill all the fields');
      return;  
    }

    // More detailed email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setMessage('Invalid email format')
      return;
    }

    // Password validation checks
    if (password.length < 8) {
      setMessage('Password must be at least 8 characters long.')
      return;
    }

    const containsUpperCase = /[A-Z]/.test(password);
    const containsLowerCase = /[a-z]/.test(password);
    const containsNumber = /\d/.test(password);
    const containsSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (
      !(
        containsUpperCase &&
        containsLowerCase &&
        containsNumber &&
        containsSymbol
      )
    ) {
      setMessage('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character.')
      return;
    }

    try {
      // If all validation passes, make the API call
      const result = await axios.post("http://localhost:3000/api/register", {
        username,
        email,
        password,
      }).then(result => {
        if(result.data.success) {
        console.log(result.data.msg);
        setMessage(result.data.msg)
        navigate("/MyCompo");
        // Handle successful login, redirect, etc.
      } else {
        console.error(result.data.msg);
        setMessage(result.data.msg)
        // Handle unsuccessful login, display error message, etc.
      }})
    

      // Assuming you have a "navigate" function available here
    } catch (err) {
      console.error(err);
      setMessage(result.data.msg)
    }
  };

  return (
    <div className="sm:w-1/2 md:w-1/3 lg:w-1/4 bg-white rounded-md shadow-md mx-auto my-auto p-8">
      <h2 className="text-2xl font-semibold mb-6">Sign Up</h2>
      {/* SignUp Form content */}
      <form onSubmit={handleSignUp} className="flex flex-col gap-4">
        <input
          className="mb-4 h-10 border-b-2 border-black focus:outline-none focus:border-blue-500"
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="First Name"
          required
        />

        <input
          className="mb-4 h-10 border-b-2 border-black focus:outline-none focus:border-blue-500"
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />

        <input
          className="mb-4 h-10 border-b-2 border-black focus:outline-none focus:border-blue-500"
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
          Sign Up
        </button>
      </form>
      <p className="mt-4">
        Already have an account?{" "}
        <Link to="/" className="text-blue-500">
          Login
        </Link>
      </p>
      <p className="text-red-500">{message}</p>
    </div>
  );
};

export default SignUp;
