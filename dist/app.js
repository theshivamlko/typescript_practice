"use strict";
console.log("Hello World");
// working with numbers
function add(n1, n2) {
    return n1 + n2;
}
const number1 = 5;
const number2 = 2.8;
let number3 = '5';
let number3_1 = '5'; // once set string is set for other var update
console.log(add(number1, number2));
console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);
const number4 = '5';
const number5 = true;
console.log(number4);
console.log(number5);
console.log(typeof number5);
console.log(typeof number5);
// Objects
const person = {
    name: "Shivam",
    age: 30
};
const p1 = {
    name: "Shivam",
    age: 30
};
console.log(person);
console.log(typeof person); // type object
console.log(person.name); // type object
const person2 = {
    name: "Shivam",
    age: 30
};
console.log(person2);
console.log(typeof person2);
const person3 = {
    name: "Shivam",
    age: 30
};
console.log(person3);
console.log(typeof person3);
// Arrays
console.log("Arrays ==========");
const person6 = {
    name: "Shivam",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    ranks: ['A+', 'S', 1]
};
console.log(person6);
console.log(typeof person6.hobbies);
console.log(typeof person6.ranks);
let favorite;
favorite = ["A", "B"];
favorite.push("C");
console.log(favorite);
console.log(favorite.length);
for (const i of favorite)
    console.log(i.toLowerCase());
console.log("Tuple ==========");
// Tuple
// Tuple is like a Record in Dart
let tuple = [1, "A"];
let tuple2;
// tuple.push(true) can accept given init type fo values only
console.log(tuple);
// you cannot assign values to tuple elements separately after the initial declaration
tuple2 = [200, "Q"];
const [var1, var2] = tuple2;
console.log(tuple2);
console.log(var1);
var myEnum;
(function (myEnum) {
    myEnum[myEnum["LOADING"] = 0] = "LOADING";
    myEnum[myEnum["RESULT"] = 2] = "RESULT";
    myEnum[myEnum["ERROR"] = 3] = "ERROR";
})(myEnum || (myEnum = {}));
// Default values are 0,1,2 , can be changes
console.log(myEnum);
console.log(myEnum.LOADING);
console.log(myEnum[1]);
// Any
let myArray1 = [1, "A", false];
console.log(myArray1);
console.log(myArray1[1]);
console.log(typeof myArray1[1]);
console.log(typeof myArray1);
console.log(typeof myArray1);
// Union type , ensures type safety
// To tell we are fine either data type ,number or string
// check2 will only accept given 2 values only
function combine(inp1, check, check2) {
    if (typeof inp1 === 'number') {
        console.log(inp1 + inp1);
    }
    else {
        console.log(inp1 + inp1);
    }
    if (check === "as-number") {
        console.log(+inp1 + +inp1); // + garantee as Number, if string then + return NaN
    }
    else if (check === "as-text") {
    }
}
combine("2", "as-number", "as-number");
combine(2, "as-text", "as-number");
const var7 = 100;
console.log(var7);
const p = { name: 'A', age: 1 };
function greet(user) {
    console.log('Hi, I am ' + user.name);
}
function isOlder(user, checkAge) {
    return checkAge > user.age;
}
// Functions
function add2(n1, n2) {
    return n1 + n2;
}
console.log('add2 ' + add2(2, 3));
let combineValues = add;
console.log(combineValues(1, 5));
let combineValues2;
combineValues2 = add;
let combineValues3;
// combineValues3=add // error
// Callback
function handler(n1, onClick) {
    let res = n1 + n1;
    let s = onClick(res);
    console.log(s);
}
handler("b", (s) => {
    console.log(s);
    return s;
});
const var12 = function () {
};
const var13 = () => {
};
const var14 = () => console.log("Inline func");
// b has default arguments, start from right
const var15 = (s, b = "B") => {
    console.log(s + b);
};
var15(1);
const var16 = (s, b) => {
    console.log(`${s} ${b}`);
};
var16(10);
var16(10, "CC");
// unknown
let var9;
let var10;
var9 = "A";
var9 = 11;
var10 = "B";
var10 = 10;
console.log(var9);
console.log(typeof var9);
console.log(var10);
console.log(typeof var10);
// never
function error(e) {
    throw { message: e };
}
try {
    var c = error("Some error");
    console.log(c);
}
catch (e) {
    console.log(e);
}
console.log("2222");
var var11 = 100; // once assigned type is fixed
() => {
    let old = "AAA";
};
// SPread
var list1 = [1, 2, 3];
var list2 = [...list1];
const map1 = { a: "A" };
const map2 = { ...map1 };
console.log(map2);
const var17 = (...numbers) => {
    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i]);
    }
};
var17(1, 2, 3, 34, 4, 5);
// Classes
class Department {
    name = "DEFAULT VALUE";
    //    constructor() {
    //        console.log(`Department constructor1 ${this} ${this.name}`)
    //    }
    constructor(n) {
        this.name = n;
        console.log(`Department constructor2 ${this} ${this.name}`);
    }
}
var department = new Department("AA");
console.log(`department ${department.name}`);
//copy obj
const departmentCopy = { name: department.name };
console.log(`departmentCopy ${departmentCopy.name}`);
const departmentCopy2 = { obj: department };
department.name = "BB";
console.log(`departmentCopy2 ${departmentCopy2.obj.name}`);
