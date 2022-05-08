'use strict'
// Function
// - fundamental buidling block in the program
// - subprogram can be used multiple times
// - performs a task or calculates a value

// 1. Function declaration
// function name(param1, param2) {body ... return;}
// one funtion === one thing
// naming : doSomething, command, verb
// e.g. createCardAndPoint -> createCard , createPoint
// function is object in JS


// 2. Parameters
// premetive parameters: passed by value - save value in memory
// object parameters: passed by reference - save reference in memory


// 3. Default parameters (added in ES6)
// only undefined parameter
{
    function showMessage(message, from = 'unknown') {
        console.log(`${message} by ${from}`);
    }
    showMessage('Hello undefined');         //use default
    showMessage('Hello null', null);
    showMessage('Hello false', false);
    showMessage('Hello ""', '');
    showMessage('Hello 0', 0);
}

// 4. Rest Parameters (adden in ES6)
// take output parameter by array
{
    function printAll(...args) {
        for(const arg of args) {
            console.log(arg);
        }
    }    
    printAll(['hello','world']);    //array input params
    printAll('hello','world');      //string input params
}

// 5. Local scope
// global scope in script
// local scope in function


// 6. Retun a value


// 7. Early return, early exit
// run function procedure 


// First-class function
// functions are treated like any other variable
// can be assigned as a value to variable
// can be passed as an argument to other functions
// can be returned by another function


// 1.Function expression
// a function declaration can be called earlier than it is defined (hoisted)
// a function expression is created when the excution reaches it

// named function
// better debugging in debugger's stack traces
// recursions
{
    const anonymous = function() {  // anonymous function
        console.log("anonymous");
    }
    const named = function addNumber(...numbers) {    // named function
        return numbers.reduce((before, after) => before + after);
    }
    const named2 = function addString(str, i) {
        if(i < 2) {
            return str + addString(str, i++);
        } else {
            return str;
        } 
    }
    anonymous();
    const anonymousOther = anonymous;
    anonymousOther();

    console.log("call named : ", named(1,2,3,4,5));
    // console.log("call addnumber : ", addNumber(1,2,3,4,5)); //error
    // console.log("call named2 : ", named2('Hi', 1)); //Maximum call stack size exceeded
}

// 2. Callback function using function expression
{
    const printYes = function() {
        console.log('Yes');
    }
    const printNo = function printNo() {
        console.log('No');
    }
    printYes();
    printNo();

    function printAnswer(answer, func1, func2) {
        if(answer === 'Yes') {
            func1();
        } else {
            func2();
        }
    }
    printAnswer('Yes', printYes, printNo);
    printAnswer('Hi', printYes, printNo);
}

// Arrow function
// always anonymous
// block needs return
{
    const addNumber1 = (...numbers) => numbers.reduce((num1, num2) => num1 + num2);
    const addNumber2 = (...numbers) => {
        //do something more
        return numbers.reduce((num1, num2) => num1 + num2);
    }
    const addNumber3 = function(...numbers) {
        //do something more
        return numbers.reduce((num1, num2) => num1 + num2);
    }
    console.log(addNumber1(1,2,4,5));
    console.log(addNumber2(1,2,4,5));
    console.log(addNumber3(1,2,4,5));
}

// IIFE: Immediately Invoked Function Expression
// old expression
(function hello(str = 'World') {
    console.log(`Hello ! ${str}`)
})('Shjoys');