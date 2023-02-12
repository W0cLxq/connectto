#include <iostream>
#include "libs/connectto.hpp"

using namespace std;

// prompt
int main()
{
     int number1;
     int number2;
     string op;

     cout << "Number 1 : ";
     cin >> number1;

     cout << endl
          << "Number 2 : ";
     cin >> number2;

     cout << endl
          << "Select op : ";
     cin >> op;

     senddata(number1, "1");
     senddata(number2, "2");
     senddata(op, "3");
}