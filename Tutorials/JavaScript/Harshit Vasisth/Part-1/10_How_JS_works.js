// closures

// when an outer function returns an inner function that inner function returns with the variables present in the lexical environment.

// these outer/lexical environment extra variables that the inner function brought are closures.

// example-1

// function outerFunction(){
//     function innerFunctoin(){
//         console.log("Hello world");
//     }
//     return innerFunctoin;
// }

// const ans = outerFunction();
// ans();






// example-2

// function printFullName(firstName, lastName){
//     function printName(){
//         console.log(firstName, lastName);
//     }
//     return printName;
// }

// const ans = printFullName("harshit", "sharma");
// ans();





// example-3

// function hello(x){
//     const a = "varA";
//     const b = "varB";
//     return function(){
//         console.log(a,b,x);
//     }
// }

// const ans = hello("arg");
// ans();






// example-4
// function myFunc(power){
//     return function(number){
//         return number**power;
//     }
// }
// const square = myFunc(2);
// const ans = square(3);
// console.log(ans);

// const cube = myFunc(3);
// const ans2 = cube(3);
// console.log(ans2);








// example-5
// function func(){
//     let counter = 0;
//     return function(){
//         if(counter<1){
//             console.log("Hi! You called me");
//             counter++;
//         }else{
//             console.log("You already called me");
//         }
//     }
// }

// const myFunc = func();
// myFunc();
// myFunc();
