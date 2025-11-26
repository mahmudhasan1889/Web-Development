// -----------------------------
// Arrays

// reference data type
// ordered collection of items

// let fruits = ["apple", "mango", "grapes"];
// let obj = {};
// let numbers = [1,2,34,4];
// let mixed = [1,2,3,4, "string", null, undefined];

// console.log(fruits);
// console.log(fruits[2]);
// console.log(numbers);
// console.log(mixed);

// fruits[1] = "banana";
// console.log(fruits);


// console.log(typeof fruits);
// console.log(typeof obj);
// console.log(Array.isArray(fruits));
// console.log(Array.isArray(obj));











// ----------------------

// Array methods
// push pop shift unshift

// push --> adds at last
// pop --> deletes from last
// shift --> deletes from front
// unshift --> adds at front


// let fruits = ["apple", "mango", "grapes"];
// fruits.push("banana");

// console.log(fruits);

// fruits.pop();
// console.log(fruits);


// fruits.shift();
// console.log(fruits);


// fruits.unshift("ata fol");
// console.log(fruits);









// -------------------------------
// primitive vs reference data types

// // primitive type
// let num1 = 6;
// let num2 = num1;
// console.log("value of num1 is ", num1);
// console.log("value of num2 is ", num2);

// num1++;
// console.log("after incrementing");

// console.log("value of num1 is ", num1);
// console.log("value of num2 is ", num2);

// // reference type
// let array1 = ["item1", "item2"];
// let array2 = array1;
// console.log("array1", array1);
// console.log("array2", array2);

// array1.push("item3");
// console.log("after pushing new item");

// console.log("array1", array1);
// console.log("array2", array2);












// -------------------------------
// how to clone array

// how to concatenate two arrays
// let array1 = ["item1", "item2"];
// // let array2 = ["item1", "item2"];


// // way-1
// // let array2 = array1.slice(0);

// // way-2
// // let array2 = [].concat(array1);

// // way-3
// let array2 = [...array1];
// array1.push("item3");

// console.log(array1 === array2);
// console.log(array1);
// console.log(array2);



// clone array as well as add new elements

// let array1 = ["item1", "item2"];


// method-1
// let array2 = array1.slice(0).concat(["item3", "item4"]);


// method-2
// let array2 = [].concat(array1, "item3", "item4");

// method-3
// let array2 = [...array1, "item3", "item4"];

// let oneMoreArray = ["item3", "item4"];
// let array2 = [...array1, ...oneMoreArray];
// console.log(array1);
// console.log(array2);









// --------------------------

// for loop in array
const fruits = ["apple", "mango", "grapes"];
// let fruits2 = [];
// for(let i=0; i<fruits.length; i++){
//     fruits2.push(fruits[i].toUpperCase());
// }

// console.log(fruits2);



// for...of loop in array
// for(let fruit of fruits){
//     console.log(fruit);
// }



// for...in loop in array
// for(let index in fruits){
//     console.log(fruits[index]);
// }









// ------------------------------
// Array destructuring
// const myArray = ["value1", "value2", "value3", "value4"];
// let [myVar1, myvar2, ...myNewArray] = myArray;

// console.log(myVar1);
// console.log(myvar2);
// console.log(myNewArray[0]);
// console.log(myNewArray[1]);