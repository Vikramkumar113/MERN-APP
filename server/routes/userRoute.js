const express = require("express");
const user_route = express();

const bodyParser = require("body-parser");
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}))

const user_controller = require("../Controllers/userController")
user_route.post('/register', user_controller.register_user);

user_route.post('/login', user_controller.user_login)

user_route.post("/forget-password", user_controller.forget_password);

user_route.put("/reset-password/:token", user_controller.reset_password);

module.exports = user_route;