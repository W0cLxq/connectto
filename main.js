const connectto = require("./libs/connectto");

connectto.runCplusplus(`
#include <iostream>

int main() {
    std::cout << "hello world";
}

`);