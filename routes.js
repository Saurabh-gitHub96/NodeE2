// var express= require("express");
// var router= express.Router();
// var userFolder=require("./user");

// router.use("/user",userFolder);

// module.exports=router


// Here we need to create a router
// router will decide where to go for what task

let Express = require('express')
let router = Express.Router()   // creation of router
let UserRoutes = require('./user')



// Defining the router here
router.use('/user', UserRoutes) // for anything related to user it will take u to user folder


module.exports = router  // sending router to outside world

//Here we need to create a router
//router will decide where to go for what task



