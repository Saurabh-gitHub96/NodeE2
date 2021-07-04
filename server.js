var express= require("express");
var server= express();
var Router=require("./routes");
var port=7000;
//fs module
// const fs = require("fs");
// fs.writeFileSync("abc.txt","I have created new file");

//path module
// const path = require("path");
// const p = "/abc/def/g/file.txt";
// console.log(path.dirname(p));
// console.log(path.basename(p));
// console.log(path.extname(p));
// console.log(path.isAbsolute(p));

//url module
// const url =require('url');
// var adrs= 'http://localhost:8080/myName.txt?var1=Saurabh';
// const parsedUrl = url.parse(adrs,true);
// console.log(parsedUrl.host);
// console.log(parsedUrl.pathname);
// console.log(parsedUrl.search);

const date = require('./date-module');
date.printDate;


server.use(Router);
server.listen(port,function(){
    console.log("Server has started on port",port);
});
