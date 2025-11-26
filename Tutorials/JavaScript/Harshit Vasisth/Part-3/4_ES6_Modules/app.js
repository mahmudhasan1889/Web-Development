import { firstName as fname } from "./utils/name.js";
import { age } from "./utils/age.js";
import hello, { Person } from './utils/person.js';

console.log(age);
console.log(fname);
console.log(hello);

const person = new Person("John", "Doe", 22);
console.log(person.info());


