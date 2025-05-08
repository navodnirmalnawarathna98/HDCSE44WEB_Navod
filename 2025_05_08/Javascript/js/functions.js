// JavaScript Function Syntax
// A JavaScript function is defined with the function keyword, followed by a name, followed by parentheses ().

// Function names can contain letters, digits, underscores, and dollar signs (same rules as variables).

// The parentheses may include parameter names separated by commas:
// (parameter1, parameter2, ...)

// The code to be executed, by the function, is placed inside curly brackets: {}

// https://www.w3schools.com/js/js_functions.asp



function myFunction1(){
    console.log("Function Working")
};

myFunction1();

function myFunction2(a,b){
    console.log("Function Working");

    return a+b;
};

let sumN = myFunction2(23,50);

console.log(sumN);