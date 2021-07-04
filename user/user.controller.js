let userService=require("./user.service");

// exports.register=(req,res)=>{
//     var technology=req.query.technology;
//     userService.createUser(technology)
//     .then((result)=>{
//         res.send({
//             message:result
//         })
//     },(error)=>{
//         res.send({
//             errorMessage:error
//         })
//     })
// }

exports.register=(req,res)=>{
    console.log("Body received from client ",req.body);

    userService.createUser(req.body)
    .then((result)=>{
        res.status(201).send({
            message:"User Created"
        })
    },(error)=>{
        res.status(500).send({
            errorMessage:error
        })
    })
}