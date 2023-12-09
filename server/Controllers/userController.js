const userModel = require("../models/userModel")
const bcryptjs = require("bcryptjs");

const nodemailer = require("nodemailer")
const jwt = require("jsonwebtoken")
const config = require("../config/config")

const securePaaword = async(password)=>{
  try{
    const passwordHash = await bcryptjs.hash(password, 10);
    return passwordHash;
  }catch(error)
  {
    res.status(400).send(error.message)
  }
}

const create_token = async(id)=>{
  try{
      const token = await jwt.sign({_id:id}, config.SECRET_JWT, {expiresIn:"15m"});
      return token;
  }catch(error){
    res.status(400).send(error.message)
  }
}

const sendResetPasswordMail = async (username, email, token) => {
  try {
    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      requireTLS: true,
      auth: {
        user: config.USER_EMAIL,
        pass: config.USER_PASSWORD
      }
    });

    const mailOptions = {
      from: config.USER_EMAIL,
      to: email ,
      subject: 'Reset Password',
      html: `<p>Hi ${username}, please copy the link to reset your password: <a href="http://localhost:5173/reset-password-
      /${token}">Reset Password</a></p>`
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Mail has been sent:', info.response);
      }
    });
  } catch (error) {
    console.error(error);
  }
};

const register_user = async (req, res)=>{
    try{
      const sPassword = await securePaaword(req.body.password)
      const user = new userModel({
        username:req.body.username,
        email:req.body.email,
        password:sPassword
      })

      const userData = await userModel.findOne({email:req.body.email})
      if(userData){
          res.status(200).send({success:false, msg:"this email is already exists"})
      }else{
         const user_data = await user.save();
         res.status(200).send({success:true, msg:"your registration done successfully"})
      }
    }catch(error){
      res.status(400).send(error.message)
      console.log(error.message);
    }
}

//login method
const user_login = async(req, res)=>{
  try{
        const email = req.body.email;
        const password = req.body.password;

        const userData = await userModel.findOne({email:email})
        if(userData){
            const passwordMatch = await bcryptjs.compare(password, userData.password);
            if(passwordMatch){
                const userResult = {
                  _id:userData.id,
                  username:userData.username,
                  email:userData.email,
                  password:userData.password
                }

                const response = {
                  success:true,
                  msg:"user details",
                  data:userResult
                }

                res.status(200).send(response);
            }else{
              res.status(200).send({success:false, msg:"password not matched"})
            }
        }else{
          res.status(200).send({success:false, msg:"login details are incorrect"})
        }
  }catch(error){
    res.status(400).send({sucess:false, msg:error.message})
}
}


//forget password
const forget_password = async (req, res) => {
  try {
    const email = req.body.email;
    
    // Use await to wait for the findOne method to resolve
    const userData = await userModel.findOne({ email: req.body.email });

    if (userData) {
      const tokenData = await create_token(userData._id);
      
      await sendResetPasswordMail(userData.username, email, tokenData);
      
      // Updating the user document with the new token
      await userModel.updateOne({ email: email }, { $set: { token: tokenData } });

      res.status(200).send({ success: true, msg: "Please check your inbox" });
    } else {
      res.status(200).send({ success: true, msg: "This email does not exist" });
    }
  } catch (error) {
    res.status(400).send({ success: false, msg: error.message });
  }
};


// reset password
const reset_password = async (req, res) => {
  try {
    const token = req.params;
    const tokenData = await userModel.findOne({ token });

    if (tokenData) {
      const password = req.body.password;
      const newPassword = await securePaaword(password);

      // Update the user's password and clear the token
      const userData = await userModel.findByIdAndUpdate(
        { _id: tokenData._id },
        { $set: { password: newPassword, token: "" } },
        { new: true }
      );

      // Send the response using the provided res parameter
      res.status(200).send({ success: true, msg: "User password has been reset", data: userData });
    } else {
      // Send the response using the provided res parameter
      res.status(400).send({ success: false, msg: "This link has expired or is invalid" });
    }
  } catch (error) {
    console.error('Error in reset_password:', error.message);
    // Send the response using the provided res parameter
    res.status(500).send({ success: false, msg: "Internal server error" });
  }
};



module.exports = {
  reset_password,
  forget_password,
  register_user,
  user_login,
  forget_password
}