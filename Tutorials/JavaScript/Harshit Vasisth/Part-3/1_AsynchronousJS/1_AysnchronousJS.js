
// synchronous programming

// console.log("script start");
// for(let i=1; i<1000; i++){
//     console.log("inside for loop");
// }

// console.log("script end");





// asynchronous programming

// console.log("script start");

// setTimeout(()=>{
//     console.log("inside settimeout");
// }, 1000);

// console.log("script end");




// setTimeout() returns an id. we can use that as a tracker or we can use that as the identity of that particular setTimeout() and control that setTimeout() also use clearTimeout(id)

// console.log("script start");
// const id = setTimeout(()=>{
//     console.log("inside setTimeout");
// }, 0);

// for(let i=0; i<100; i++){
//     console.log(".......");
// }

// console.log("setTimeout id is : ", id);

// console.log("clearing timeout");
// clearTimeout(id);

// console.log("script end");






// setInterval() ---> this will be called after a certain period of time
// this will be called after the execution of script start and script end

// console.log("script start");

// setInterval(()=>{
//     console.log(Math.random());
// }, 1000);

// console.log("script end");








// small project
// stop changing background color using clearTimeout()

// const body = document.body;
// const button = document.querySelector("button");

// const intervalId = setInterval(() => {
//     const red = Math.floor(Math.random()*126);
//     const green = Math.floor(Math.random()*126);
//     const blue = Math.floor(Math.random()*126);
//     const rgb = `rgb(${red}, ${green}, ${blue})`;
//     body.style.background = rgb;
// }, 1000);


// button.addEventListener("click", ()=>{
//     clearInterval(intervalId);
//     button.textContent = body.style.background;
// })













// callback  -  callback hell  - pyramid of doom

// callback

// example -1
// function myFunc(callback){
//     console.log("Function is doing task 1");
//     callback();
// }

// myFunc(()=>{
//     console.log("Function is doing task2");
// })



// example -2
// function getTwoNumbersAndAdd(number1, number2, callback){
//     console.log(number1, number2);
//     callback(number1, number2);
// }

// function addTwoNumbers(num1, num2){
//     console.log(num1+num2);
// }

// getTwoNumbersAndAdd(4, 5, addTwoNumbers);



// example -3 | two callback functions
// function getTwoNumbersAndAdd(number1, number2, onSuccess, onFailure){
//     if(typeof number1==="number" && typeof number2==="number"){
//         onSuccess(number1, number2);
//     }else{
//         onFailure();
//     }
// }

// getTwoNumbersAndAdd("6", 5, (num1, num2)=>{
//     console.log(num1 + num2);
// }, ()=>{
//     console.log("Wrong data");
//     console.log("please pass numbers only");
// })







// callback hell
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// setTimeout(() => {
//     heading1.textContent = "one";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "two";
//         heading2.style.color = "green";
//         setTimeout(()=>{
//             heading3.textContent = "three";
//             heading3.style.color = "pink";
//             setTimeout(()=>{
//                 heading4.textContent = "four";
//                 heading4.style.color = "blue";
//                 setTimeout(()=>{
//                     heading5.textContent = "five";
//                     heading5.style.color = "magenta";
//                     setTimeout(()=>{
//                         heading6.textContent = "six";
//                         heading6.style.color = "grey";
//                         setTimeout(()=>{
//                             heading7.textContent = "seven";
//                             heading7.style.color = "red";
//                         }, 1000);
//                     }, 1000);
//                 }, 1000);
//             }, 1000);
//         }, 1000);
//     }, 1000);
// }, 1000);










// pyramid of doom

// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
//     setTimeout(()=>{
//         if(element){
//             element.textContent = text;
//             element.style.color = color;
//             if(onSuccessCallback){
//                 onSuccessCallback();
//             }else{
//                 if(onFailureCallback){
//                     onFailureCallback();
//                 }
//             }
//         }
//     }, time)
// }

// changeText(heading1, "one", "violet", 1000, ()=>{
//     changeText(heading2, "two", "purple", 1000, ()=>{
//         changeText(heading3, "three", "red", 1000, ()=>{
//             changeText(heading4, "four", "magenta", 1000, ()=>{
//                 changeText(heading5, "five", "green", 1000, ()=>{
//                     changeText(heading6, "six", "blue", 1000, ()=>{
//                         changeText(heading7, "seven", "pink", 1000, ()=>{

//                         }, ()=>{console.log("heading7 does not exist")})
//                     }, ()=>{console.log("heading6 does not exist")})
//                 }, ()=>{console.log("heading5 does not exist")})
//             }, ()=>{console.log("heading4 does not exist")})
//         }, ()=>{console.log("heading3 does not exist")})
//     }, ()=>{console.log("heading2 does not exist")})
// }, ()=>{console.log("heading1 does not exist")})