// 1 ------------------------------------

// "use strict";

// // intro to variables

// // variables can store some information
// // we can use that information later
// // we can change that information later

// // declare a variable
// var firstName = "Hasan";
// var lastName = "Mashuk";

// var fullName = firstName + ' ' + lastName;

// console.log(fullName);









// 2 -------------------------------------

// // Rules for naming variables

// // You cannot start with number
// // example
// // 1value (invalid)
// // value1 (valid)

// var value1 = 10;
// console.log(value1);

// // you can only use underscore _ or dollar $ symbol
// // first_Name (valid)
// // _firstName (valid)
 
// // first$Name (valid)
// // $firstName (valid)

// // you can not use spaces

// // first name (invalid)

// // convention
// // start with small letter and use camelCase









// 3 ---------------------------------------

// // trim()
// // toUpperCase()
// // toLowerCase()
// // slice()

// let firstName = "Harshit";

// console.log(firstName.length);
// firstName = firstName.trim();
// console.log(firstName);
// console.log(firstName.length);

// console.log(firstName.toLowerCase());
// console.log(firstName.toUpperCase());

// console.log(firstName);

// let newString = firstName.slice(0, 5);
// console.log(newString);









// 4 --------------------------------------

// // String Concatenation

// // let string1 = "Harshit";
// // let string2 = "Vashisth";

// // let fullName = string1 + " " + string2;
// // console.log(fullName);

// let string1 = "17";
// let string2 = "18";

// let newString = +string1 + +string2;
// console.log(newString);






// 5 ----------------------------

// // String Indexing

// let firstName = "harshit";

// // h a r s h i t
// // 0 1 2 3 4 5 6 

// console.log(firstName[0]);
// // length of String
// // firstName.length

// console.log(firstName.length);

// console.log(firstName[firstName.length - 1]);










// 6-----------------------------------

// // typeof operator

// // data types (primitive data type)
// // string "harshit"
// // number 2, 4, 5.6
// // booleans
// // undefined
// // null
// // BigInt
// // Symbol

// // let age = 22;
// // let firstName = "harshit";

// // console.log(typeof age);
// // console.log(typeof firstName);


// // convert number to string
// // age = age + "";
// // console.log(typeof age);

// // age = String(age);
// // console.log(typeof age);

// // convert string to number
// let age = "17";
// age = +age;

// console.log(typeof age);

// age = Number(age);
// console.log(typeof age);











// 7----------------------------

// // template string

// let age = 22;
// let firstName = "Harshit";



// // expected output:
// // my name is harshit and my age is 22;





// // using normal concatenation way:
// // let aboutMe = "My name is " + firstName + " and my age is " + age;




// // using template string:
// let aboutMe = `My name is ${firstName} and my age is ${age}`;



// console.log(aboutMe);









// 8---------------------------

// // undefined
// // null
// // BigInt


// // undefined
// let firstName;
// console.log(typeof firstName);

// firstName = "Harshit";
// console.log(typeof firstName, firstName);


// // null
// let myVariable = null;
// console.log(myVariable);
// myVariable = "Harshit";
// console.log(typeof myVariable, myVariable);

// console.log(typeof null);


// // BigInt
// let myNumber = BigInt(123492356734857638563);
// let myNumber2 = 239568235786n;
// console.log(myNumber);
// console.log(myNumber2);

// console.log(Number.MAX_SAFE_INTEGER);

// console.log(myNumber + myNumber2);











// 9-------------------------------------

// // Booleans and Comparison operator

// let num1 = 7;
// let num2 = "7";

// console.log(num1 > num2);

// console.log(num1 == num2);

// console.log(num1 === num2);


// console.log(num1 !== num2);










// 10------------------------------

// // if else condition

// let age = 17;

// if(age >= 18){
//     console.log("User can play Red Dead Redemption");
// }else{
//     console.log("user can play pokemon");
// }


// let num = 13;

// if(num%2 == 0){
//     console.log("even");
// }else{
//     console.log("odd");
// }



// // Truthy value
// // everything truthy

// // Falsy values
// // false
// // ""
// // null
// // undefined
// // 0

// let firstName = "";

// if(firstName){
//     console.log(firstName);
// }else{
//     console.log(`firstName kinda empty`);
// }








// --------------------------

// // Ternary operator / conditional operator

// let age = 5;
// let drink = age >= 5 ? "coffee" : "milk";
// console.log(drink);





// ----------------------

// // and or operator

// let firstName = "harshit";
// let age = 16;

// if(firstName[0] === 'h'){
//     console.log("your name starts with h");
// }else{
//     console.log("your name doesn't start with h");
// }