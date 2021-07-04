console.log("date-module is triggered- 1");

function printDate(){
    console.log(Date());
}
function Iam(){
    console.log("I am fine");
}
module.export = {
    printDate : printDate()

}

console.log("date-module is triggered- 2");
