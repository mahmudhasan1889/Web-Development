// Promise

// means future value

// is an object which has
// {
//     status: pending/resolved
//     value: 
// }


// setInterval ---> callback queue
// promise .then or .catch ---> microtask queue

// promise will be executed before setInterval as microtask queue got more priority

// promise must be --> produced(new Promise)
                // --> consumed(.then or .catch)



// console.log("script start");

// // setTimeout(()=>{
// //     console.log("Hello from setTimeout");
// // }, 0)


// const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
// const friedRicePromise = new Promise((resolve, reject)=>{
//     if(bucket.includes("vegetables") && bucket.includes("salt") && bucket.includes("rice")){
//         resolve("fried rice");
//     }else{
//         reject("could not do it");
//     }
// })


// friedRicePromise
// .then((myFriedRice)=>{
//     console.log("lets eat ", myFriedRice);
// })
// .catch((error)=>{
//     console.log(error);
// })

// setTimeout(()=>{
//     console.log("Hello from setTimeout");
// }, 0)

// console.log("script end");











// function returning promise
// function ricePromise(){
//     const bucket = ["coffee", "chips", "vegetables", "salty", "rice"];
//     return new Promise((resolve, reject) => {
//         if(bucket.includes("vegetables") && bucket.includes("rice") && bucket.includes("salt")){
//             resolve({value: "fried rice"});
//         }else{
//             reject("could not do it");
//         }
//     })
// }

// ricePromise()
// .then((myFriedRice)=>{
//     console.log("lets eat ", myFriedRice);
// })
// .catch(error=>{
//     console.log(error);
// })









// Promise && setTimeout

// suppose i want to resolve/reject promise after 2 seconds

// function myPromise(){
//     return new Promise((resolve, reject) => {
//         const value = true;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }else{
//                 reject();
//             }
//         }, 2000)
//     })
// }

// myPromise()
// .then(()=>{console.log("resolved")})
// .catch(()=>{console.log("rejected")})







// Promise.resolve()
// const myPromise2 = Promise.resolve(5);
// myPromise2.then(value=>{
//     console.log(value);
// })

// NB: .then always returns another promise







// promise chaining

// function myPromise(){
//     return new Promise((resolve, reject) => {
//         resolve("foo");
//     })
// }

// myPromise()
// .then((value)=>{
//     console.log(value);
//     value += "bar";
//     return value;
// })
// .then((value)=>{
//     console.log(value);
//     value += "baaz";
//     return value;
// })
// .then((value)=>{
//     console.log(value);
// })










// callback hell using Promise
// const heading1 = document.querySelector(".heading1");
// const heading2 = document.querySelector(".heading2");
// const heading3 = document.querySelector(".heading3");
// const heading4 = document.querySelector(".heading4");
// const heading5 = document.querySelector(".heading5");
// const heading6 = document.querySelector(".heading6");
// const heading7 = document.querySelector(".heading7");

// function changeText(element, text, color, time){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=>{
//             if(element){
//                 element.textContent = text;
//                 element.style.color = color;
//                 resolve();
//             }else{
//                 reject("element not found");
//             }
//         }, time);
//     })
// }


// changeText(heading1, "one", "red", 1000)
// .then(()=>{changeText(heading2, "two", "purple", 1000)})
// .then(()=>{changeText(heading3, "three", "magenta", 2000)})
// .then(()=>{changeText(heading4, "four", "green", 3000)})
// .then(()=>{changeText(heading5, "five", "pink", 4000)})
// .then(()=>{changeText(heading6, "six", "blue", 5000)})
// .then(()=>{changeText(heading7, "seven", "skyblue", 6000)})
// .catch((error)=>{console.log(error)})