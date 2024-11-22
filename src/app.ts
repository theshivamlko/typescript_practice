console.log("Hello World")

// working with numbers
function add(n1: number, n2: number) {
    return n1 + n2;
}

const number1 = 5;
const number2 = 2.8;
let number3: string = '5';
let number3_1 = '5'; // once set string is set for other var update

console.log(add(number1, number2))

console.log(typeof number1)
console.log(typeof number2)
console.log(typeof number3)

const number4 = '5';
const number5: boolean = true;
console.log(number4)
console.log(number5)
console.log(typeof number5)
console.log(typeof number5)

// Objects
const person = {
    name: "Shivam",
    age: 30
}
const p1: object = {
    name: "Shivam",
    age: 30
}
console.log(person);
console.log(typeof person); // type object
console.log(person.name); // type object

const person2: {} = {
    name: "Shivam",
    age: 30
}
console.log(person2);
console.log(typeof person2);


const person3: {
    name: string,
    age: number
} = {
    name: "Shivam",
    age: 30
}
console.log(person3);
console.log(typeof person3);


// Arrays
console.log("Arrays ==========");

const person6 = {
    name: "Shivam",
    age: 30,
    hobbies:['Sports','Cooking'],
    ranks:['A+','S',1]
}
console.log(person6);
console.log(typeof person6.hobbies);
console.log(typeof person6.ranks);

let favorite:string[];
favorite=["A","B"]
favorite.push("C")

console.log(favorite);
console.log(favorite.length);


for(const i of favorite)
    console.log(i.toLowerCase());

console.log("Tuple ==========");

// Tuple
// Tuple is like a Record in Dart
let tuple=[1,"A"];
let tuple2:[number,string];
// tuple.push(true) can accept given init type fo values only
console.log(tuple);
// you cannot assign values to tuple elements separately after the initial declaration
tuple2=[200,"Q"];
const [var1,var2]=tuple2
console.log(tuple2);
console.log(var1);

enum myEnum{
    LOADING,
    RESULT=2,
    ERROR
}
// Default values are 0,1,2 , can be changes
console.log(myEnum);
console.log(myEnum.LOADING);
console.log(myEnum[1]);

// Any

let myArray1:any=[1,"A",false]
console.log(myArray1);
console.log(myArray1[1]);
console.log(typeof myArray1[1]);
console.log(typeof myArray1);
console.log(typeof myArray1);
