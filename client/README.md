MERN Stack User Authentication
A simple MERN (MongoDB, Express.js, React, Node.js) stack application for user authentication. The project includes features like user registration, login, and password reset.


Table of Contents
Introduction
Features
Prerequisites
Installation
Configuration
Usage
Folder Structure
Technologies Used
Contributing

Introduction
This project serves as a boilerplate for implementing user authentication using the MERN stack. It provides a solid foundation for developers looking to integrate authentication features into their web applications.

Features
User registration with email verification.
User login 
Forget password functionality with JWT( jsonwebtoken)
Password reset functionality.
Secure password storage using bcrypt.

Prerequisites
Before you begin, ensure you have the following installed:

Node.js and npm
MongoDB
React + vite
Tailwind css


Installation
1. Clone the repository
git clone https://github.com/your-username/mern-authentication.git
cd mern-authentication

2. Install server dependencies
cd server
npm install


3. Install client dependencies
cd server
npm install

Configuration
create a folder config and create a file in thi folder as config.js and create a object
  SECRET_JWT : "YOUR_SECRET_KEY",
  USER_EMAIL: "YOUR_MAIL",
  USER_PASSWORD : "YOUR_PASSWORD",
  PORT : PORT,
  MONGO_URI : "YOUR_MONGODB_URI"

  Note:- instead of your orignal password you can create app password that is provided by gmail

  - How to generate App password
    1. Go to your gmail account
    2. go to security
    3. start Two-step-verification
    4. now in the two-step-vertification page at the bottom there is a option app password

Usage
1. Start the server
  cd server
  npm run start

2. Start the client
   cd client
   npm run dev

Technologies Used
MongoDB
Express.js
React + vite
Tailwind css
Node.js
JWT (JSON Web Tokens)
Bcrypt
nodemailer

Contributing
Contributions are welcome! Please follow the contribution guidelines.