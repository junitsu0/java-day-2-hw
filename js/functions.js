console.log("Conjunction Function")

/*
    JavaScript Functions
*/

// Regularly Named Function
// function <funcName>(param1, param2, etc.){ code to execute when called}

function addNums(){
    let num1 = 10;
    let num2 = 20;
    return num1 + num2;
};

console.log(addNums);
// Execute a function: funcName(arg1, arg2, etc.)
console.log(addNums());

// Regularly Named Function with Parameters
// function <funcName>(param1, param2, etc.){code to execute}

function addNums2(num1, num2){return num1 + num2;};

console.log(addNums2);
// Execute a function: funcName(arg1, arg2, etc.)
console.log(addNums2(25, 75));


// Take Exercise 1 from last and put it in a Function

function firstNonConsecutive(anArr){
    for (let i=0; i<anArr.length; i++){
        if (anArr[i]+1 !== anArr[i+1]){
        return i + 1
        };
    };
    return null;
};

console.log(firstNonConsecutive([1,2,3,4,5,6,7]));
console.log(firstNonConsecutive([11,12,13,15,16]));

// Function variable declaration
// <var, let, or const> nameOfVariable = function(){ code to call when executed }

var addSomeNums = function(){
    let num1 = 100;
    let num2 = 200;
    return num1 + num2;
};

console.log(addSomeNums);
console.log(addSomeNums());

let addMoreNums = function(num1, num2){
    return num1 + num2;
};

console.log(addMoreNums);
console.log(addMoreNums(10,20));

// Arrow Functions
// var varName = () => {}

var myFirstArrowFunc = () => {};
console.log(myFirstArrowFunc);
console.log(typeof myFirstArrowFunc);


// Arrow function with parameters
// Remove the function keyword and add an '=>' between the params and {code}

let addNumsArrow = (num1, num2) => {
    return num1 + num2;
};

console.log(addNumsArrow(15, 30));

// IF {code} is one line with only a return, you can remove the {} and 'return'

let addNumsArrow2 = (num1, num2) => num1 + num2;

console.log(addNumsArrow2(10,25));

// IF there is ONE and ONLY ONE parameter, parentheses are not necessary

let addTen = num => num + 10;

function addTen2(num){
    return num + 10;
};

console.log(addTen(24));

// Create an arrow function for exercise 2 of last night's homework
// Given an array, return the sum of all positive elements

let totalPositives = arr => {
    let totalPos = 0;
    for (let num of arr){
        if (num > 0){
            totalPos += num;
        };
    };
    return totalPos;
};

console.log(totalPositives([2, 6, -1, -20, 12, 40, -23, 4])); // 64A
