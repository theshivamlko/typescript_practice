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
var var7 = 100;
console.log(var7);
var p = { name: 'A', age: 1 };
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
var combineValues = add;
console.log(combineValues(1, 5));
var combineValues2;
combineValues2 = add;
var combineValues3;
// combineValues3=add // error
// Callback
function handler(n1, onClick) {
    var res = n1 + n1;
    var s = onClick(res);
    console.log(s);
}
handler("b", function (s) {
    console.log(s);
    return s;
});
// unknown
var var9;
var var10;
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
var c = error("Some error");
console.log(c);
