let Express = require('express')
let router  = Express.Router()
let UserController = require('./user.controller')


router.post('/register',function(req,res,next){
    function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }
    if(validateEmail(req.body.email)){
        next();
    }else{
        console.log("Enter valid email ID");
    }
}, UserController.register)
//router.post('/login', UserController.login)
//router.get('/allusers', UserController.allUsers)
// router.post('/register, function(req,res){})


module.exports = router
