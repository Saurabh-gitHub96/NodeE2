
exports.addUser = ()=>{
    // Here busniesslogic will be performed and then response will be sent back to manager
    // manager based on response will send back the response to client
}


// exports.createUser = (data)=>{
//     console.log("data passed from controller" , data)

//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//     if(data=="Nodejs"){
//         resolve("I will Work")
//     }
//     else{
//         reject("Sorry I dont know that technology")
//     }
//         },3000)
//     })
// }

var userModel= require("./user.modal");

exports.createUser=(data)=>{
    return new Promise((resolve,reject)=>{
        var validateUserData=new userModel(data);
        validateUserData.save().then((result)=>{
            resolve(result);
        },(err)=>{
            if(err.code=11000){
                reject({
                    error:"User Already Exist"
                })
            }
            else{ 
                reject("Internal Server Error");
            }
           
        })
    })
}