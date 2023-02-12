const fs = require("fs");

function senddata(data, datanumber) {
    fs.mkdirSync("connectto_files");
    fs.writeFileSync("connectto_files/cpptojsdatatransfer" + datanumber + ".ctto", data);
}

function getdata(datanumber) {
    var fileRead = fs.readFileSync("connectto_files/cpptojsdatatransfer" + datanumber + ".ctto", "utf-8");
    return fileRead;
}

module.exports = { senddata, getdata }
