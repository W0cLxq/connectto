# Connectto

Connectto allows you to send data to C++ via javascrpt or to javascript via C++.

## Use

- Step 1

Download the Libs folder. (We will make a downloader soon.)

- Step 2

Connect with Javascript

```js
const connectto = require("./libs/connectto);
```

Connect with C++

```cpp
#include "libs/connectto.cpp"
```

- Step 3

Send and Get

JS:

```js
connectto.runCplusplus(`
#include <iostream>
int main() {
    std::cout << "hello world";
}
`);
```

C++ :

```cpp
runJS("console.log('hello world')");
```

- Step 4

**Now you can rejoice and enjoy your code!**
