// iterables --> where we can use for...of loop
// string, array
// object is not iterable

// for(item of items){
//     console.log(item);
// }

// array like objects --> who has .length property
// const firstName = "harshit";
// console.log(firstName.length);








// -------------------------
// Sets
// -------------------------

// it is iterable
// data will be stored linearly
// no indexed based access
// order is not guranteed
// unique items only (no duplicates allowed)
// sets also have its own methods

// const numbers = new Set([1,2,4,6]);
// numbers.add(36); // adding int

// const items = ["items1", "item2"];
// numbers.add(items); // adding array

// console.log(numbers);

// if(numbers.has(1)){
//     console.log("1 is present in the set");
// }

// for(number of numbers){
//     console.log(number);
// }







// extract unique elements from an array using set

// const myArray = [1,3,4,6,7,8,2,3,3,3,9];
// const uniqueElements = new Set(myArray);
// console.log(uniqueElements);


// let length = 0;
// for(let element of uniqueElements){
//     length++;
// }

// console.log(length);












// --------------------------------
// Maps
// --------------------------------

// stores key: value pair (like objects)
// Duplicate keys are not allowed like objects
// Map is iterable
// stores data in ordered fashion


// objects can only have string or symbol as key
// maps can use anything as key(like array, numbers, string, even objects);

// const person = new Map();
// person.set("firstName", "harshit");
// person.set("age", 7);
// person.set(1, "one");
// person.set([1,2,3], "onetwothree"); //set array
// person.set({1: "one"}, "Naive"); //set object literal

// console.log(person.get("age")); //get() method is used to get key from the map

// console.log(person.keys());


// for(let key of person.keys()){
//     console.log(key);
// }


// for(let [key, value] of person){
//     console.log(key, value);
// }


// // assgining key value pair directly to the map using array

// const user = new Map([["firstName", "harshit"], ["age", 7]]);
// console.log(user);





// adding extra info (key: value) pair to an object

// const person1 = {
//     id: 1,
//     firstName: "Harshit"
// }

// const extraInfo = new Map();

// extraInfo.set(person1, {age: 8, gender: "male"});

// console.log(person1.id);
// console.log(extraInfo.get(person1).gender);
















// --------------------------------
// cloning object
// --------------------------------

// const obj = {
//     key1: "value1",
//     key2: "value2",
//     key3: "value3"
// }

// const obj2 = {...obj, key4: "value4"};
// const obj3 = Object.assign({}, obj);

// console.log(obj);
// console.log(obj2);
// console.log(obj3);










// --------------------------------
// optional chaining
// --------------------------------

// const user = {
//     firstName: "harshit",
//     address: {houseNumber: '1234'}
// }

// console.log(user?.firstName);
// console.log(user?.address?.houseNumber);