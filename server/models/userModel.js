const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
  username:{
    type:String,
    required:true
  },
  email:{
    type:String,
    required:true
  },
  password:{
    type:String,
    required:true
  },
  token:{
    type:String,
    default:''
  }
})

const userModel = mongoose.model("registerData",userSchema)

module.exports = userModel;