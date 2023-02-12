#include <iostream>
#include <fstream>
#include <io.h>

using namespace std;

void senddata(auto data, string datanumber)
{
    mkdir("connectto_files");
    ofstream fileToJS("connectto_files/cpptojsdatatransfer" + datanumber + ".ctto");
    fileToJS << data;
    fileToJS.close();
}

string getdata(string datanumber)
{
    ifstream gettojs("connectto_files/cpptojsdatatransfer" + datanumber + ".ctto");
    string getjsvar;
    while (getline(gettojs, getjsvar))
    {
    }
    gettojs.close();
    return getjsvar;
}