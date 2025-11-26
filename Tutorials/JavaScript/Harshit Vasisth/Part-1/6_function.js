// Function


// 1. Function Declaration
// function singHappyBirthday(){
//     console.log("Happy birthday to you...");
// }

// singHappyBirthday();



// ---------
// function twoPlusFour(){
//     return 2+4;
// }

// const returnedValue = twoPlusFour();
// console.log(returnedValue);







// // function with parameters
// function sumOfTwoNumbers(num1, num2){
//     return num1 + num2;
// }

// const returnedValue2 = sumOfTwoNumbers(3, 5);
// console.log(returnedValue2);





// even odd

// function isEven(number){
//     return number % 2 === 0;
// }

// console.log(isEven(6));




// print first character of a string
// function firstChar(string){
//     return string[0];
// }

// console.log(firstChar("nebula"));




// ---
// function findTarget(array, target){
//     for(let i=0; i<array.length; i++){
//         if(array[i] === target){
//             return "Yes present";
//         }
//     }
//     return "Not present";
// }

// const arr = [1,3,5,6,7,8,9];
// const num = 9;

// console.log(findTarget(arr,  num));








// ------------------------------
// 2. Function expression
// const singHappyBirthday = function(){
//     console.log("Happy birthday to you...");
// }

// singHappyBirthday();






// --------------------------
// 3. Arrow function
// const singHappyBirthday = () => {
//     console.log("Happy bithday to you...");
// }
// singHappyBirthday();






// function inside function
// function app(){
//     const myFunc = () => {
//         console.log("Hello from myFunc");
//     }

//     const addTwo = (num1, num2) =>{
//         return num1 + num2;
//     }

//     const mul = (num1, num2) => num1*num2;

//     console.log("inside app");
//     myFunc();
//     console.log(addTwo(2,4));
//     mul(3,5);
// }

// app();








// lexical scope
// function myApp(){

//     const myVar = "value1";

//     function myFunc(){
//         // const myVar = "value45";
//         console.log("inside myFunc", myVar);
//     }

//     const myFunc2 = function(){}
//     const myFunc3 = () => {}

//     console.log(myVar);
//     myFunc();
// }

// myApp();








// block scope vs function scope

// let and const are block scope
// var is function scope


// {
//     var firstName = "harshit";
// }

// {
//     var firstName = "mohit";
// }

// console.log(firstName);












// default parameters

// function addTwo(a, b){
//     if(typeof b === "undefined"){
//         b = 0;
//     }
//     return a+b;
// }

// const ans = addTwo(4);
// console.log(ans);











// rest parameters

// function myFunc(a,b, ...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is `, c);
// }

// myFunc(3,5,6,7,7,8);



// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total = total + number;
//     }
//     return total;
// }

// const ans = addAll(1,2,3,4,5);
// console.log(ans);





// parameter destructuring / param destructuring

// used in objec
// react

// const person = {
//     firstName: "harshit",
//     gender: "male"
// }

// function printDetails({firstName, gender, age}){
//     console.log(firstName);
//     console.log(gender);
//     console.log(age);
// }

// printDetails(person);










// callback functions
// function myFunc2(name){
//     console.log("inside myFunc2");
//     console.log(`your name is ${name}`);
// }

// function myFunc(callback){
//     console.log("hello there I am a text and I am the direct child of myFunc");

//     callback("harshit");
// }

// myFunc(myFunc2);










// function returning function

// function myFunc(){
//     function hello(){
//         return "hello world";
//     }
//     return hello;
// }

// const ans = myFunc();
// console.log(ans());

