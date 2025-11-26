// important array methods

// forEach
// map
// filter
// reduce








//------------------------------------
// forEach method
//-------------------------------------

// const numbers = [3,5,6,7,8];

// function multiplyBy2(number, index){
//     console.log("index is ", index);
//     console.log(`${number} * 2 = ${number*2}`);
// }

// // for(let i=0; i<numbers.length; i++){
// //     multiplyBy2(numbers[i], i);
// //     console.log("...");
// // }

// numbers.forEach(multiplyBy2);




// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "nitish", age: 45},
//     {firstName: "kalyiani", age: 23}
// ]

// using for...of loop

// for(let user of users){
//     console.log(user.firstName);
// }


// using forEach method with function

// users.forEach(function(user){
//     console.log(user.firstName);
// })


// using forEach with arrow function
// users.forEach((user)=>{
//     console.log(user.firstName);
// })











// --------------------------------
// map method
// --------------------------------

// returns a new array
// it is crucial to return from a map function, don't console.log inside of it

// const numbers = [3,4,6,7,8];

// const square = function(number){
//     return number*number;
// }

// const squareNumber = numbers.map(square);
// console.log(squareNumber);

// const squareNumber2 = numbers.map(number => number*number);
// console.log(squareNumber2);





// const users = [
//     {firstName: "harshit", age: 23},
//     {firstName: "mohit", age: 45},
//     {firstName: "ozark", age: 52}
// ]

// const userNames = users.map((user)=>{
//     return user.firstName;
// })

// console.log(userNames);












// --------------------------------
// filter method
// --------------------------------

// takes callback function as argument
// returns a new array based on boolean value/condition
// if true then add the element to the new array,
// if false then doesn't add
// it filters out values based on condition

// const numbers = [2,34,4,67,6];

// const isEven = function(number){
//     return number%2 === 0;
// }

// const evenNumbers = numbers.filter(isEven);
// console.log(evenNumbers);

// const evenNumbers = numbers.filter(number => {
//     return number%2 === 0;
// })

// console.log(evenNumbers);



// const oddNumbers = numbers.filter(number => {
//     return number%2 !== 0;
// })

// console.log(oddNumbers);













// --------------------------------
// reduce method
// --------------------------------

// takes callback function with 2 parameters
// gives a reduced value based on operation

// const numbers = [1,2,3,4,5];

// // aim : sum of all the numbers in the array

// const sum = numbers.reduce((previousValue, currentValue) => {
//     return previousValue + currentValue;
// }, 0);

// console.log(sum);





// const userCart = [
//     {pruductId: 1, productName: "mobile", price: 1200},
//     {pruductId: 2, productName: "laptop", price: 2200},
//     {pruductId: 3, productName: "tv", price: 13000}
// ]

// const totalAmount = userCart.reduce((totalPrice, currentProduct) => {
//     return totalPrice + currentProduct.price;
// }, 0);

// console.log(totalAmount);













// --------------------------------
// sort method
// --------------------------------

// changes the actual array
// it sorts considering elements as strings


// sorting strings
// const userNames = ["harshit", "abcd", "mohit"];
// userNames.sort();
// console.log(userNames);



// sorting numbers

// in Ascending order or low to high
// const numbers = [34,57,8,32,7];
// const lowToHigh = numbers.slice(0).sort((a,b)=>{
//     return a-b;
// })

// console.log(lowToHigh);
// console.log(numbers);

// // in descending order or high to low

// const highToLow = numbers.slice(0).sort((a,b)=>{
//     return b-a;
// })

// console.log(highToLow);
// console.log(numbers);




// example: sort price
// const products = [
//     {productId: 1, productName: "mobile", price: 300},
//     {productId: 2, productName: "tv", price: 6000},
//     {productId: 3, productName: "tablet", price: 1200},
//     {productId: 4, productName: "gpu", price: 8000}
// ]

// // low to high
// const lowToHigh = products.slice(0).sort((a,b)=>{
//     return a.price-b.price;
// })

// console.log(lowToHigh);

// // high to low
// const highToLow = products.slice(0).sort((a,b)=>{
//     return b.price-a.price;
// })

// console.log(highToLow);















// --------------------------------
// find method
// --------------------------------
// finds a specific element in the array which meets a condition true

// const array = ["hello", "cat", "doggy", "lion"];

// function isLength3(string){
//     return string.length === 4;
// }

// const ans = array.find(isLength3);
// console.log(ans);



// example
// const users = [
//     {userId: 1, userName: "harshit"},
//     {userId: 2, userName: "mohit"},
//     {userId: 3, userName: "nitish"}
// ]

// const myUser =  users.find((user)=>{
//     return user.userId === 3;
// })

// console.log(myUser.userName);









// --------------------------------
// every method
// --------------------------------

// takes callback function
// gives true if every element meetes the condition

// const numbers = [2,5,6,7,98];

// const ans = numbers.every((number)=>{
//     return number%2 === 0;
// })

// console.log(ans);



// example
// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 68000},
//     {productId: 3, productName: "tv", price: 87000}
// ]

// const ans = userCart.every((product)=>{
//     return product.price <= 30000;
// })

// console.log(ans);










// --------------------------------
// some method
// --------------------------------

// takes callback function
// returns true if one of the elements of the aray meets the condition

// const numbers = [2,3,4,5,7];
// const ans = numbers.some((number)=>{
//     return number%2 === 0;
// })

// console.log(ans);


// example
// const userCart = [
//     {productId: 1, productName: "mobile", price: 12000},
//     {productId: 2, productName: "laptop", price: 68000},
//     {productId: 3, productName: "tv", price: 87000}
// ]

// const ans = userCart.some((product)=>{
//     return product.price <= 30000;
// })
// console.log(ans);












// --------------------------------
// fill method
// --------------------------------
// changes the original array
// (value, startIndex, beforeEndIndex)

// const myArray = new  Array(10).fill(0);
// console.log(myArray);

// // creates a new array of size 10 and fills every index with 0

// const array = [1,2,4,5,67,78,5];
// array.fill(0,1,5);
// console.log(array);










// --------------------------------
// splice method
// --------------------------------
// (start, deleteCount, insert)

// const myArray = ["item1", "item2", "item3"];

// // delete
// const deletedItem = myArray.splice(1,1);
// console.log("deletedItem is ", deletedItem);

// console.log(myArray);

// // insert
// myArray.splice(1,0,"inserted item");
// console.log(myArray); 


// // insert and delete together
// myArray.splice(1,2,"inserted item1", "inserted item 2");
// console.log(myArray);