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
    n;
    name = "DEFAULT VALUE";
    salary = 0;
    //    constructor() {
    //        console.log(`Department constructor1 ${this} ${this.name}`)
    //    }
    constructor(n) {
        this.n = n;
        this.name = n;
        console.log(`Department constructor2 ${this} ${this.name}`);
    }
}
var department = new Department("AA");
console.log(`department ${department.name}`);
//copy obj
const departmentCopy = { name: department.name };
console.log(`departmentCopy ${departmentCopy.name}`);
// Shared value in instances
const departmentCopy2 = { obj: department };
department.name = "BB";
console.log(`departmentCopy2 ${departmentCopy2.obj.name}`);
class ITDepartment extends Department {
    constructor() {
        super("IT");
    }
    display() {
        console.log(`display ${this.name}`);
    }
}
const itDepart = new ITDepartment();
console.log(`display ${itDepart.name}`);
const emp1 = {
    startDate: new Date(),
    name: 'MAX',
    privilage: ["AND"]
};
const emp2 = {
    startDate: new Date(),
    name: 'MAX'
};
console.log(`emp1 ${emp1.name} ${emp1.startDate}`);
function add3(e) {
    if ('privilage' in e) {
        return `Admin: ${e.privilage}`;
    }
    if ('startDate' in e) {
        return `Employee:`;
    }
    return "";
}
console.log(add3(emp1));
// Type cast
// Number to String
let num = 42;
let str = num.toString();
// String to Number
let strNum = "42";
let numFromStr = Number(strNum);
console.log(numFromStr);
// Integer to Float
let intNum = 42;
let floatNum = intNum + 0.01; // Explicit type assertion 0.00 not adding
console.log((floatNum));
// Float to Integer (Truncation)
let floatNum2 = 42.5;
let intNum2 = Math.floor(floatNum2);
console.log(intNum2);
const errorBag = {
    id: "111",
    email: 'shivam@gmail.com',
};
// To check later
//function sum(a: string, b: string): string;
//function sum(a: number, b: string): string;
//function sum(a: ElevatedEmployee2, b: ElevatedEmployee2): any {
//    if ('props' in a) {
//        return "${a.toString()}" + "${b.toString()}";
//    } else if ('props3' in a) {
//        return "2222";
//    } else {
//        const a1: ElevatedEmployee2 = {
//            name: 'John Doe',
//            startDate: new Date()
//        };
//        return a1;
//    }
//}
//
//console.log(sum(1, "2"));
//console.log(sum("1", "2"));
//sum(emp2, emp2);
const userData = {
    id: '1',
    job: { title: "CEO" }
};
// console.log(userData?.abc ?? 'default value')
let user1;
const user2 = '';
var user4 = user1 || 'DEFAULT'; // here user1 is undefined so default
var user5 = user2 || 'DEFAULT'; // here user1 is empty so default
var user6 = user2 ?? 'DEFAULT'; // here user1 is empty so default
console.log(user1 ?? 'user1 default value'); // check null or undefined
console.log(user2 ?? 'user2 default value');
console.log(user4 ?? 'user4 default value');
console.log(user5 ?? 'user5 default value');
console.log(user6 ?? 'user6 default value');
