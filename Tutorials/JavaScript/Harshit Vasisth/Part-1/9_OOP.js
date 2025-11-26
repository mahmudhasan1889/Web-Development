// Object Oriented JavaScript

// methods
// function inside object

// function personInfo(){
//     console.log(`person name is ${this.firstName} and age is ${this.age}`);
// }

// const person1 = {
//     firstName : "harshit",
//     age : 25,
//     about : personInfo
// }

// const person2 = {
//     firstName : "mohit",
//     age : 18,
//     about : personInfo
// }

// person1.about();
// person2.about();



// console.log(this);
// console.log(window);


// // "use strict"
// function myFunc(){
//     console.log("hello world");
// }

// myFunc();







// call apply bind

// call

// function about(hobby, favMusic){
//     console.log(this.firstName, this.age, hobby, favMusic);
// }
// const user1 = {
//     firstName: "harshit",
//     age: 9,
// }

// const user2 = {
//     firstName: "mohit",
//     age: 8
// }

// about.call(user1, "guiter", "mozart");


// apply
// about.apply(user1, ["guitar", "mozart"]);

// // bind

// const func = about.bind(user2, "guitar", "bach");
// func();







// arrow function takes this from the surrounding (goes one scope up from where the "this is")

// const user1 = {
//     firstName: "harshit",
//     age: 8,
//     about: ()=>{
//         console.log(this);
//         console.log(this.firstName, this.age);
//     }
// }

// user1.about();





















// -----------------------
// Method
// -----------------------

// if there are multiple objects that can be created from a single template object, then we should create a function that will create and return an object each time it is called with different arguments for different objectssssss

// template object
// const user1 = {
//     firstName: "Harshit",
//     lastName: "Vasisth",
//     email: "harshitvasisth@gmail.com",
//     age: 23,
//     address: "House number, colony, pincode, state",
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }


// but for different different person we will have to create multiple user objects. that's tideous. 
// that's why we can create a function which will create multiple objects based on different arguments passed to it. and return the user.



// creating object template with function

// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.age = age;
//     user.email = email;
//     user.address = address;
//     user.about = function(){
//         return `${this.firstName} is ${this.age} years old`;
//     }
//     user.is18 = function(){
//         return this.age >= 18;
//     }
//     return user;
// }

// const user1 = createUser("Harshit", "Vasisth", "harshit@gmail.com", 14, "23, colonial state, pilgrim");
// console.log(user1);


// but this also has drawback. cause when we will create millions of this function for millions of users. .about and .is18 will also be created. thus memory space will be wasted much more. 
// we can create another object containing these methods and store them there then utilize them by just calling them. so they're not created multiple times and thus memory is not wasted.




// separating methods and giving them their own space inside another object so that they won't have to be created million times

// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }

// function createUser(firstName, lastName, email, age, address){
//     const user = {};
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     user.about = userMethods.about;
//     user.is18 = userMethods.is18;
//     return user;
// }

// const user1 = createUser("harshit", "vasisth", "harshit@gmail.com", 18, "address");
// console.log(user1);






// but this also has drawback. cause if we may forget to add userMethod methods into createUser.
// that's why we can pass the reference of userMethods into createUser by Object.create(userMethods). and it will be stored in the __proto__ section of the function(createUser)

// const userMethods = {
//     about: function(){
//         return `${this.firstName} is ${this.age} years old`;
//     },
//     is18: function(){
//         return this.age >= 18;
//     }
// }

// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(userMethods);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// const user1 = createUser("harshit", "vasisth", "harshit@gmail.com", 18, "address");
// console.log(user1);





// ----------------------
// prototype
// ----------------------

// prototype is an object that exists within a funciton
// it is the free space that exists under the function and workds as object

// JS Function = function + object

// function hello(){
//     console.log("hello world");
// }

// console.log(hello.name);

// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);

// // onnnnnly function provides prototype property
// console.log(hello.prototype);


// hello.prototype.abc = "abc";
// hello.prototype.sing = function(){
//     return "lalala";
// }

// console.log(hello.prototype.sing());







// Since function itself has prototype object free space, then we can utilize this free space.
// we will store the methods inside the prototype

// function createUser(firstName, lastName, email, age, address){
//     const user = Object.create(createUser.prototype);
//     user.firstName = firstName;
//     user.lastName = lastName;
//     user.email = email;
//     user.age = age;
//     user.address = address;
//     return user;
// }

// createUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`;
// }
// createUser.prototype.is18 = function(){
//     return this.age >= 18;
// }
// createUser.prototype.sing = function(){
//     return "lalala";
// }


// const user1 = createUser("harshit", "vasisth", "harshit@gmail.com", 18, "address");
// console.log(user1);









// ------------------------
// new keyword
// ------------------------

// creates empty object i.e. this = {}
// returns this object
// Object.create(createUser.prototype) used to create prototype object freespace under the function manually. 
// but now new keyword will do that automatically.

// function CreateUser(firstName, lastName, email, age, address){
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.email = email;
//     this.age = age;
//     this.address = address;
//     return this;  //optional bcz new keyword returns this automatically
// }

// CreateUser.prototype.about = function(){
//     return `${this.firstName} is ${this.age} years old`;
// }
// CreateUser.prototype.is18 = function(){
//     return this.age >= 18;
// }








// ------------------------------
// class keyword
// ------------------------------

// classes are fake, they work like constructor functions internally

// class CreateUser{
//     constructor(firstName, lastName, email, age, address){
//         console.log("constructor called");
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.email = email;
//         this.age = age;
//         this.address = address;
//     }

//     about(){
//         return `${this.firstName} is ${this.age} years old`;
//     }
//     is18(){
//         return this.age >= 18;
//     }
//     sing(){
//         return "lalala";
//     }
//     func(a){
//         console.log(a);
//     }
// }

// const user1 = new CreateUser("harshit", "vasisth", "harshit@gmail.com", 18, "voyeger belt");

// user1.func("Hakuna");
// console.log(Object.getPrototypeOf(user1));








// inheritence
// class Animal{
//     constructor(name, age){
//         this.name = name;
//         this.age = age;
//     }
//     eat(){
//         return `${this.name} is eating`;
//     }
//     isCute(){
//         return true;
//     }
// }

// class Dog extends Animal{
//     constructor(name, age, speed){
//         super(name, age);
//         this.speed = speed;
//     }
//     eat(){
//         return `Dogs own way of eating: ${this.name} is eating`;
//     }
//     run(){
//         return `${this.name} is running at ${this.speed} kmh`;
//     }
// }

// const tommy = new Dog("dogesh", 12, 34);

// console.log(tommy.run());
// console.log(tommy.eat());









// getter and  setter function
// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     get fullName(){
//         return `${this.firstName} ${this.lastName}`;
//     }
//     set fullName(fullName){
//         const [firstName, lastName] = fullName.split(" ");
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
// }

// const person1 = new Person("harshit", "sharma", 5);
// person1.fullName = "mohit vasisth";
// console.log(person1);







// static method and properties

// this gives the power to directly call method and properties of class by the class name
// it does not depend on object/instance

// class Person{
//     static classInfo(){
//         return `this is person class`;
//     }
//     static desc = "static property";
// }

// console.log(Person.classInfo());
// console.log(Person.desc);