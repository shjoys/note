'use strict'
/*
    Objects
    a collection of related data and/or functionality.
    Nearly all objects in Javascript are instances of Object
    object = {key : value}
*/

// 1. Literals and properties
const obj1 = {};    // 'object literal' syntax
const obj2 = new Object();  // 'object constructor' syntax

// Javascript 는 dynamically typed language
// 동적으로 type이 runtime 때 결정됨 : 선언 이후 object 내 객체 추가/삭제 가능
obj1.name = 'Jack';
console.log(obj1.name); // Jack

delete obj1.name;
console.log(obj1.name); // undefined


// 2. Computed properties
// object[key] : key 가 뭔지 모를때 동적으로

// 3. Property value shorthand
const person1 = {name: 'Steve', age: 20};
const person2 = makePerson('Richard', 30);
function makePerson(name, age) {
    // key 값이 정확하게 같을경우 name: name 대신 parameter만 return 가능
    return {
        name,
        age
    }
}
console.log(person1);
console.log(person2);

// 4. Contructor function
const person3 = new Person('Amma', 22);
function Person(name, age) {
    // this = {}; 생략
    this.name = name;
    this.age = age;
    // return this; 생략
}
console.log(person3);

// 5. in operator : property existence check (key in obj)
console.log('name' in person3); // true

// 6. for..in vs for..of
// for (key in obj)
for (key in person1) {
    console.log(key);
}
// for (value of iterable)
const array1 = [1,2,3,5];
for (value of array1) {
    console.log(value);
}

// 7. Fun cloning
// Object.assign(dest, [obj1, obj2, ...]);