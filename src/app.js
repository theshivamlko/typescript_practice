console.log("Hello World");
// working with numbers
function add(n1, n2) {
    return n1 + n2;
}
var number1 = 5;
var number2 = 2.8;
var number3 = '5';
var number3_1 = '5'; // once set string is set for other var update
console.log(add(number1, number2));
console.log(typeof number1);
console.log(typeof number2);
console.log(typeof number3);
var number4 = '5';
var number5 = true;
console.log(number4);
console.log(number5);
console.log(typeof number5);
console.log(typeof number5);
// Objects
var person = {
    name: "Shivam",
    age: 30
};
var p1 = {
    name: "Shivam",
    age: 30
};
console.log(person);
console.log(typeof person); // type object
console.log(person.name); // type object
var person2 = {
    name: "Shivam",
    age: 30
};
console.log(person2);
console.log(typeof person2);
var person3 = {
    name: "Shivam",
    age: 30
};
console.log(person3);
console.log(typeof person3);
// Arrays
console.log("Arrays ==========");
var person6 = {
    name: "Shivam",
    age: 30,
    hobbies: ['Sports', 'Cooking'],
    ranks: ['A+', 'S', 1]
};
console.log(person6);
console.log(typeof person6.hobbies);
console.log(typeof person6.ranks);
var favorite;
favorite = ["A", "B"];
favorite.push("C");
console.log(favorite);
console.log(favorite.length);
for (var _i = 0, favorite_1 = favorite; _i < favorite_1.length; _i++) {
    var i = favorite_1[_i];
    console.log(i.toLowerCase());
}
console.log("Tuple ==========");
// Tuple
// Tuple is like a Record in Dart
var tuple = [1, "A"];
var tuple2;
// tuple.push(true) can accept given init type fo values only
console.log(tuple);
// you cannot assign values to tuple elements separately after the initial declaration
tuple2 = [200, "Q"];
var var1 = tuple2[0], var2 = tuple2[1];
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
var myArray1 = [1, "A", false];
console.log(myArray1);
console.log(myArray1[1]);
console.log(typeof myArray1[1]);
console.log(typeof myArray1);
console.log(typeof myArray1);
// Union type
// To tell we are fine either number or string
function combine(inp1, check) {
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
combine("2", "as-number");
combine(2, "as-text");
