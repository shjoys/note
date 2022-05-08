'use strict'
/* Class VS Object
Class
    - template
    - declare once
    - no data in
    - ex. cake

Object
    - instance of a class
    - created many times
    - data in 
    - ex. cheese_cake,  choco_cake, mint_choco_cake

JavaScript Classes
    - introduced in ES6
    - syntactical sugar over prototype-based inheritance

 */


// 1. Class declarations
// fields, methods 들은 class 가 생성되면서 복제됨
class Person {
    // constructor
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello !`);
    }
}

const marry = new Person('marry', 20);
console.log(marry.name);
console.log(marry.age);
marry.speak();

// 2. Getter and setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        
        /*
            getter, setter 가 선언되면, 변수 선언시 바로 메모리에 할당되는 것이 아니라
            this.age    는 getter 를 호출
            = age       는 setter 를 호출
        */
        this.age = age;
    }

    get age() {
        // return this.age;
        return this._age;
    }

    set age(value) {
        /* 
            this.age
            = value     가 setter(자신)을 무한 호출 : 방지하기 위해 getter, setter 가 _ 사용 가능하게함
        */
        // this.age = value;
        this._age = value;
    }
}

const user1 = new User('Steve', 'Jobs', -1);

// 3. Fields (public. private)
class Experiment {
    publicField = 2;
    #privateField = 0;
}
const experiment = new Experiment();
console.log(experiment.publicField);    // 2
console.log(experiment.privateField);   // undifined

// 4. Static properties and methods
// class 자체 고유의 field 혹은 method
class Article {
    static publisher = 'Nature Communication';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Article.publisher);
    }
}

const article1 = new Article(1);
console.log(article1.publisher);    // undefined
console.log(Article.publisher);     // Nature Communication

// 5. Inheritance
// a way for one class to extend another class
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}
class Triangle extends Shape {
    draw() {
        // Shape 의 method도 호출 하면서 override
        super.draw();
        console.log('super!!!!');
    }

    // override
    getArea() {
        return (this.width * this.height) / 2;
    }
}

const rectangle = new Rectangle(20, 15, 'blue');
rectangle.draw();
console.log(rectangle.getArea());   //300

const triangle = new Triangle(20, 15, 'red');
triangle.draw();
console.log(triangle.getArea());    //150