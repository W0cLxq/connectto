const connectto = require("./libs/connectto");

//calculate and write
if (connectto.getdata("3") == "+") {
    console.log(parseInt(connectto.getdata(1)) + parseInt(connectto.getdata(2)))
} else if (connectto.getdata("3") == "-") {
    console.log(parseInt(connectto.getdata(1)) - parseInt(connectto.getdata(2)))
} else if (connectto.getdata("3") == "*") {
    console.log(parseInt(connectto.getdata(1)) * parseInt(connectto.getdata(2)))
} else if (connectto.getdata("3") == "/") {
    console.log(parseInt(connectto.getdata(1)) / parseInt(connectto.getdata(2)))
}