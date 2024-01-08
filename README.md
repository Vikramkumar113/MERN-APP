# MERN Stack User Authentication

A simple MERN (MongoDB, Express.js, React, Node.js) stack application for user authentication. The project includes features like user registration, login, and password reset.

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Folder Structure](#folder-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)

## Introduction
This project serves as a boilerplate for implementing user authentication using the MERN stack. It provides a solid foundation for developers looking to integrate authentication features into their web applications.

## Features
- User registration with email verification.
- User login 
- Forget password functionality with JWT (jsonwebtoken).
- Password reset functionality.
- Secure password storage using bcrypt.

## Prerequisites
Before you begin, ensure you have the following installed:
- Node.js and npm
- MongoDB
- React + Vite
- Tailwind CSS

## Installation
1. Clone the repository
    ```bash
    git clone https://github.com/Vikramkumar113/MERN-APP.git
    ```

2. Install server dependencies
    ```bash
    cd server
    npm install
    ```

3. Install client dependencies
    ```bash
    cd client
    npm install
    ```

## Configuration
Create a folder `config` and create a file `config.js`. Add the following object to the file:

```javascript
module.exports = {
  SECRET_JWT: "YOUR_SECRET_KEY",
  USER_EMAIL: "YOUR_MAIL",
  USER_PASSWORD: "YOUR_PASSWORD",
  PORT: PORT,
  MONGO_URI: "YOUR_MONGODB_URI",
  RESET_PASSWORD_LINK: YOUR_RESET_PASSWORD_COMPONENT_PATH,
};
```
**Note:** Instead of your original password, you can use an app password provided by Gmail.

### How to generate App password
1. Go to your Gmail account.
2. Go to Security.
3. Start Two-step verification.
4. In the Two-step verification page, at the bottom, there is an option for an app password.

### Usage
#### Start the server
```bash
cd server
npm run start
```
#### Start the client
```bash
cd client
npm run dev
```

## Technologies Used
- [MongoDB](#mongodb)
- [Express.js](#expressjs)
- [React + Vite](#react--vite)
- [Tailwind CSS](#tailwind-css)
- [Node.js](#nodejs)
- [JWT (JSON Web Tokens)](#jwt-json-web-tokens)
- [Bcrypt](#bcrypt)
- [Nodemailer](#nodemailer)

## Contribution
Contributions are welcome! 

- If you find any bug in the application, or a feature you think would be nice to have, please open an issue.
- If you want to contribute code, please fork the project and submit a pull request.
- If you are contributing for the first time, you can find more information here. It contains all the information about making the changes and submitting the pull request.
