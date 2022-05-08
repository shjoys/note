// 6. Logical operators

/* 
    || (or), finds the first truthy value
    && (and), finds the first falsy value

    if(true (stop here) || true || false) {

        ...
    }

    note : set simple value first parameter

*/
const value1 = true;
const value2 = 4 < 2;
function check() {
    console.log('not come here');
    return true;
}

console.log(`or: ${value1 || value2 || check()}`);

// 7. equality

/*
    obejct equality by reference
*/
const obj1 = {name : 'Tom'};
const obj2 = {name : 'Tom'};
const obj3 = obj1;
console.log(obj1 == obj2);      //false
console.log(obj1 === obj2);     //false
console.log(obj1 === obj3);     //true