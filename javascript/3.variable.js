// 1. Use strict
// added in ES5
// use this for Vanila Javascript
'use strict';

// 2. Variable, read / write in memory
// let (added in ES6)
{
    console.log("1. before block var : ", hoisting);
    console.log("1. before block let : ", name);
    {
        var hoisting = 'wtf';
        let name = 'shjoys';

        console.log("2. in block var : ", hoisting);
        console.log("2. in block let : ", name);
    }

    console.log("3. after block var : ", hoisting);
    console.log("3. after block let : ", name);
}

// 3. Constants, read only
// favor immutable data type always for a few rewsons:
// - security
// - thread safety
// - reduce human mistakes

// Note !
// Immutable data types: primitive types, frozen objects (i.e. object.freeze())
// Mutable data types : all objects by default are mutable in JS
// primitive type save value in memory, object type save reference in memory

// 4. bigint
{
    const bigInt = 12314134n
    console.log(`${bigInt} , type : ${typeof bigInt}` );
}


// 5. Sybol, create unique identifiers for objects
{
    const symbol1 = Symbol('id');
    const symbol2 = Symbol('id');
    console.log(`${symbol1 === symbol2}`);
    // console.log(`${symbol1} vs ${symbol2}`); //cannot convert a Symbol value to a string
    
    console.log(`symbol1 : ${symbol1.description}`);
    console.log(`symbol2: : ${symbol2.description}`);
}






