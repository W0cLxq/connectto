#include <iostream>
#include <fstream>
#include <io.h>

using namespace std;

void runJS(string code)
{
    mkdir("connectto_files");
    ofstream fileToJS("connectto_files/connectojs.js");
    fileToJS << code;
    fileToJS.close();

    char out = system("node connectto_files/connectojs.js");
    cout << out;
}