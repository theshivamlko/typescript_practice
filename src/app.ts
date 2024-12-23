 import { validateString } from './app2';


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
    hobbies: ['Sports', 'Cooking'],
    ranks: ['A+', 'S', 1]
}
console.log(person6);
console.log(typeof person6.hobbies);
console.log(typeof person6.ranks);

let favorite: string[];
favorite = ["A", "B"]
favorite.push("C")

console.log(favorite);
console.log(favorite.length);


for (const i of favorite)
    console.log(i.toLowerCase());

console.log("Tuple ==========");

// Tuple
// Tuple is like a Record in Dart
let tuple = [1, "A"];
let tuple2: [number, string];
// tuple.push(true) can accept given init type fo values only
console.log(tuple);
// you cannot assign values to tuple elements separately after the initial declaration
tuple2 = [200, "Q"];
const [var1, var2] = tuple2
console.log(tuple2);
console.log(var1);

enum myEnum {
    LOADING,
    RESULT = 2,
    ERROR
}

// Default values are 0,1,2 , can be changes
console.log(myEnum);
console.log(myEnum.LOADING);
console.log(myEnum[1]);

// Any

let myArray1: any = [1, "A", false]
console.log(myArray1);
console.log(myArray1[1]);
console.log(typeof myArray1[1]);
console.log(typeof myArray1);
console.log(typeof myArray1);

// Union type , ensures type safety
// To tell we are fine either data type ,number or string
// check2 will only accept given 2 values only
function combine(inp1: number | string, check: string, check2: "as-number" | "as-text") {

    if (typeof inp1 === 'number') {
        console.log(inp1 + inp1)

    } else {
        console.log(inp1 + inp1)
    }

    if (check === "as-number") {
        console.log(+inp1 + +inp1) // + garantee as Number, if string then + return NaN

    } else if (check === "as-text") {

    }
}

combine("2", "as-number", "as-number")
combine(2, "as-text", "as-number")

// Alias
type AnyName = number;
const var7: AnyName = 100;
console.log(var7)

type User = { name: string; age: number };
const p: User = {name: 'A', age: 1}

function greet(user: User) {
    console.log('Hi, I am ' + user.name);
}

function isOlder(user: User, checkAge: number) {
    return checkAge > user.age;
}

// Functions
function add2(n1: number, n2: number): number {
    return n1 + n2
}

console.log('add2 ' + add2(2, 3));

let combineValues = add;
console.log(combineValues(1, 5));

let combineValues2: Function;
combineValues2 = add;

let combineValues3: (a: number, b: string) => void;
// combineValues3=add // error

// Callback
function handler(n1: string, onClick: (arg: string) => string) {
    let res = n1 + n1
    let s = onClick(res)
    console.log(s);

}

handler("b", (s) => {
    console.log(s)
    return s;
});

const var12 = function () {
}

const var13 = () => {

}
const var14 = () => console.log("Inline func")

// b has default arguments, start from right
const var15 = (s: number, b: string = "B") => {
    console.log(s + b)
}
var15(1)

const var16 = (s: number, b?: string) => {
    console.log(`${s} ${b}`)
}
var16(10)
var16(10, "CC")


// unknown
let var9: unknown
let var10: any
var9 = "A"
var9 = 11
var10 = "B"
var10 = 10
console.log(var9)
console.log(typeof var9)
console.log(var10)
console.log(typeof var10)

// never
function error(e: string): never {
    throw {message: e};
}

try {
    var c = error("Some error")
    console.log(c)
} catch (e) {
    console.log(e)
}


console.log("2222")

var var11 = 100; // once assigned type is fixed
() => {
    let old = "AAA";
}

// SPread
var list1 = [1, 2, 3]
var list2 = [...list1]
const map1 = {a: "A"}
const map2 = {...map1}
console.log(map2)


const var17 = (...numbers: number[]) => {

    for (let i = 0; i < numbers.length; i++) {
        console.log(numbers[i])

    }
}
var17(1, 2, 3, 34, 4, 5)


// Classes

class Department {
    name: string = "DEFAULT VALUE";
    private salary: number = 0;

//    constructor() {
//        console.log(`Department constructor1 ${this} ${this.name}`)
//    }
    constructor(readonly n: string) {
        this.name = n;
        console.log(`Department constructor2 ${this} ${this.name}`)
    }

//    constructor(private n1: string,public n2:string) {
//        this.name = n1;
//        console.log(`Department constructor2 ${this} ${this.name}`)
//    }
}

var department = new Department("AA");
console.log(`department ${department.name}`)
//copy obj
const departmentCopy = {name: department.name}
console.log(`departmentCopy ${departmentCopy.name}`)

// Shared value in instances
const departmentCopy2 = {obj: department}
department.name = "BB"
console.log(`departmentCopy2 ${departmentCopy2.obj.name}`)


class ITDepartment extends Department {
    constructor() {
        super("IT");
    }

    display() {
        console.log(`display ${this.name}`)
    }
}

const itDepart = new ITDepartment();
console.log(`display ${itDepart.name}`)


// Intersection, similar like interfaces
type Admin = {
    name: string;
    privilage: string[]
}
type Employee = {
    name: string;
    startDate: Date
}

// object Intersection
type  ElevatedEmployee = Admin & Employee;
type  ElevatedEmployee2 = Admin | Employee;

const emp1: ElevatedEmployee = {
    startDate: new Date(),
    name: 'MAX',
    privilage: ["AND"]
}
const emp2: ElevatedEmployee2 = {
    startDate: new Date(),
    name: 'MAX'
}
console.log(`emp1 ${emp1.name} ${emp1.startDate}`)
//data type Intersection
type  Numeric = number | string;

function add3(e: ElevatedEmployee): string {

    if ('privilage' in e) {
        return `Admin: ${e.privilage}`;
    }
    if ('startDate' in e) {
        return `Employee:`;
    }
    return ""
}

console.log(add3(emp1));

// Type cast
// Number to String
let num: number = 42;
let str: string = num.toString();

// String to Number
let strNum: string = "42";
let numFromStr: number = Number(strNum);
console.log(numFromStr);

// Integer to Float
let intNum: number = 42;
let floatNum: number = intNum + 0.01; // Explicit type assertion 0.00 not adding
console.log((floatNum));

// Float to Integer (Truncation)
let floatNum2: number = 42.5;
let intNum2: number = Math.floor(floatNum2);
console.log(intNum2);

interface ErrorContainer {
    id: string // should be of same stype as prop
    [prop: string]: string;
}

const errorBag: ErrorContainer = {
    id: "111",
    email: 'shivam@gmail.com',
}

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
    job: {title: "CEO"}
}
// console.log(userData?.abc ?? 'default value')


let user1;
const user2 = '';
var user4: string = user1 || 'DEFAULT'; // here user1 is undefined so default
var user5: string = user2 || 'DEFAULT'; // here user1 is empty so default
var user6: string = user2 ?? 'DEFAULT'; // here user1 is empty so default

console.log(user1 ?? 'user1 default value') // check null or undefined
console.log(user2 ?? 'user2 default value')
console.log(user4 ?? 'user4 default value')
console.log(user5 ?? 'user5 default value')
console.log(user6 ?? 'user6 default value')

// Generics
const names: Array<string> = ['MAX', 'Mannual']
names.forEach((s) => {
    console.log(`names ${s}`)
});


const promise: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("DONE")
    }, 1000)
})
promise.then((r) => {
    console.log(`promise ${r}`)
})


function merge<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB);
}

const mergeObj = merge({name: "Shivam"}, {age: "31"})
console.log(`promise ${mergeObj.age} ${typeof mergeObj}`)

interface Lengthy {
    length: number
}

function countAndPrint<T extends Lengthy>(element: T):[T,string] {
    let description = 'Got no value'
    if (element.length > 0) {
        description = `Got ${element.length} value`
    }
    return [element,description];
}

function extract<T extends object,U extends  keyof T>(obj: T,key:U) {

    return 'Value: '+obj[key];
}

console.log(extract({name:'Max'},"name"))


interface CourseGoal{
    title:string;
    description:string;
    date:Date
}


function  createCourseGoal(
    title:string,
    description:string,
    date:Date
): CourseGoal{
    // Make compulsory param as partial to be initialized later
    let courseGoal:Partial<CourseGoal> = {};
    courseGoal.title=title;
    courseGoal.description=description;
    courseGoal.date=date;
    return  courseGoal as CourseGoal;
}
var course1=createCourseGoal( 'Shivam', 'string', new Date())
console.log(`course1 ${course1.title} ${course1.date}`)

// Readonly
const names2:Readonly<string[]>=['A','B']

// Decorator

//function  Logger(target:Function){
function  Logger(param:string){
   return  function(target:Function){
       console.log('Logger...') // prints first before Person2()
       console.log(target)
       console.log(param)
   };
}

function Log(target:any,property:string){
    console.log("Log...")
    console.log(property)
    console.log(target)
}
@Logger('PARAM1')
class Person2{
    @Log
    name='Decorator'
    constructor() {
        console.log('Creating person object...')
    }
}
const pers=new Person2()
console.log(pers)

// Import ES6
validateString("hello")