const fs = require("fs");

function runCplusplus(code) {
    fs.mkdirSync("connectto_files");
    fs.writeFileSync("connectto_files/runtimecppCode.cpp", code);
    const execSync = require('child_process').execSync;
    const compilerErrors = execSync("g++ connectto_files/runtimecppCode.cpp -o connectoOutput");
    if (process.platform == "win32") {
        const runtime = execSync("./connectoOutput.exe");
    } else {
        const runtime = execSync("./connectoOutput");
    }
}

module.exports = { runCplusplus }
