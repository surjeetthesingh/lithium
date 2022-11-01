const express = require('express');
const router = express.Router();
// const UserModel= require("../models/userModel.js")
const UserController= require("../controllers/userController")
const BookController= require("../controllers/bookController")
//const commonMW = require ("../middlewares/commonMiddlewares")


//router.post("/createUser", UserController.createUser  )
// router.get("/getUsersData", UserController.getUsersData)
const midd1= function ( req, res, next) {
    let current_datetime = new Date();
    let todaydate =
      current_datetime.getFullYear() +
      "-" +
      (current_datetime.getMonth() + 1) +
      "-" +
      current_datetime.getDate() +
      " " +
      current_datetime.getHours() +
      ":" +
      current_datetime.getMinutes() +
      ":" +
      current_datetime.getSeconds();
      
    // let log = `[${formatted_date}]`;
    var ip = require("ip");
    console.log([todaydate , ip.address()]);
    next();
  };
  module.exports.midd1= midd1
  router.get('/newcode',midd1, UserController.basicCode)
module.exports = router;