// Objects
// arrays are good but not sufficient
// for real world data
// objects store key value pair
// objects don't have index


// how to create object---
const person = {
    name : "harshit",
    age : 16,
    hobbies : ["guitar", "sleeping", "listening"],
    "person hobbies" : ["sleeping", "swimming"]
}

// console.log(person);



// how to access data from objects----
// console.log(person.name);
// console.log(person.age);
// console.log(person.hobbies);

// console.log(person["person hobbies"]);



// // add key:value pairs
// person.gender = "male";
// console.log(person);




// getting key from a variable and adding that key and value in the object

// const key = "email";
// person[key] = "harshit@gmail.com";
// console.log(person);









// how to iterate object

// for...in loop
// for(let key in person){
//     console.log(`${key} : ${person[key]}`);
// }



// object.keys mehtod
// console.log(Object.keys(person));
// it gives an array of keys of an object



// for...of loop
// for(let key of Object.keys(person)){
//     console.log(person[key]);
// }



// computed properties
// const key1 = "objkey1";
// const key2 = "objkey2";

// const value1 = "myValue1";
// const value2 = "myValue2";

// const obj = {
//     [key1] : value1,
//     [key2] : value2
// }

// console.log(obj);





// spread operator
// const array = [..."1322345346"];
// console.log(array);



// cloning objects and assigning object to another object
// const obj1 = {
//     key1 : "value1",
//     key2 : "value2"
// }

// const obj2 = {
//     key3 : "value3",
//     key4 : "value4"
// }

// const newObject = {...obj1, ...obj2};
// console.log(newObject);





// Object destructuring
// const band = {
//     bandName : "led zapplin",
//     famousSong : "stairing to heaven",
//     year : 1968,
//     anotherFamousSong : "Kashmir"
// }

// let {bandName, famousSong} = band;
// console.log(bandName, "," , famousSong);




// Objects inside array
// very useful in real world application
const users = [
    {userId:1, firstName:"harshit", gender:"male"},
    {userId:2, firstName:"mohitt", gender:"male"},
    {userId:3, firstName:"priyadarshini", gender:"female"},
]

for(let user of users){
    console.log(user);
}


// nested destructuring
const[{firstName}, ,{gender}] = users;
console.log(firstName);