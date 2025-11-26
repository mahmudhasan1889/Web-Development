
// -----------------------------
// getElementById()
// -----------------------------

// select element using getElementById() method
// getElementById() method belongs to document object

// console.log(document.getElementById("main-heading"));
// console.log(typeof document.getElementById("main-heading"));
// console.dir(document.getElementById("main-heading"));

// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading);






// -----------------------------
// querySelector()
// -----------------------------

// used to select all types of elements

// const mainHeading = document.querySelector("#main-heading");

// const header = document.querySelector(".header");

// const navItems = document.querySelectorAll(".nav-item")

// console.log(navItems);







// -----------------------------
// .textContent  &  .innerText
// -----------------------------
// const mainHeading = document.getElementById("main-heading");
// console.log(mainHeading.textContent);

// mainHeading.textContent = "this is changed text";
// console.log(mainHeading.textContent);



// console.log(mainHeading.innerText)
// innerText only shows whats on the webpage

// console.log(mainHeading.textContent);
// textContent shows whats been hidden too






// change the style of elements

// const mainHeading = document.querySelector("div.headline h2");
// console.log(mainHeading.style);

// mainHeading.style.backgroundColor = "blue";
// mainHeading.style.border = "20px solid white";








// get and set attribute

// const link = document.querySelector("a");
// console.log(link.getAttribute("href").slice(1));

// link.setAttribute("href", "https://codprog.com");

// console.log(link.getAttribute("href"));

// console.log(link.getAttribute("href").slice(0));


// const inputElement = document.querySelector(".form-todo input");
// console.log(inputElement.getAttribute("type"));












// get multiple elements using getElementByClassName() and querySelectorAll()

// const navItems = document.getElementsByClassName("nav-item");
// console.log(navItems);
// console.log(navItems[2]);

// const navItems2 = document.querySelectorAll("nav-item");
// console.log(navItems2[1]);











// looping through HTML elements

// html elements returns an html collection. so we can't use forEach method on them.

// to use forEach we need to convert the HTML collection into array

// but we can use for, for...of loop

// let navItems = document.getElementsByTagName("a");  // this will return an html collection


// for loop
// for(let i=0; i<navItems.length; i++){
//     const navItem = navItems[i];
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "#000"
//     navItem.style.padding = "0.2rem";
//     navItem.style.fontWeight = "bold";
// }



// for...of loop
// for(let navItem of navItems){
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "green"
//     navItem.style.padding = "0.2rem";
// }



// forEach loop
// navItems = Array.from(navItems);
// console.log(Array.isArray(navItems));

// navItems.forEach((navItem)=>{
//     navItem.style.backgroundColor = "#fff";
//     navItem.style.color = "black"
//     navItem.style.padding = "0.2rem";
// })




// we can loop through node lists created by querySelectorAll and use all the loops

// let navItems = document.querySelectorAll("a");









// ----------------------
// innerHTML
// ----------------------

// can change html code from js file

// const headline = document.querySelector(".headline");
// console.log(headline.innerHTML);

// headline.innerHTML = "<h1>Inner html changed</h1>";
// headline.innerHTML += "<button class=\"btn\">Learn more</button>";

// console.log(headline.innerHTML);







// to know how many class does an element have
// const sectionTodo = document.querySelector(".section-todo");
// console.log(sectionTodo.classList);



// // to add new class in an element
// // sectionTodo.classList.add("bg-dark");
// console.log(sectionTodo.classList);


// // to check if a class is present in an element or not
// const ans = sectionTodo.classList.contains("container");
// console.log(ans);


// // if the class is present then it will remove, and if not present then it will add. i.e toggle
// sectionTodo.classList.toggle("bg-dark");









// add html element with JS

// innerHTML to add html element
// const todoList = document.querySelector(".todo-list");
// todoList.innerHTML += "<li>New Todo</li>";
// // todoList.innerHTML += "<li>Teach students</li>";

// // best methods
// const newTodoItem = document.createElement("li");
// todoList.append(newTodoItem);

// // const newTodoItemText = document.createTextNode("Teach students");
// // newTodoItem.append(newTodoItemText);

// newTodoItem.textContent = "Teach Students";



// removing the first element
// const todo1 = document.querySelector(".todo-list li");
// todo1.remove();
// console.log(todo1);





// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Teach students";
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);
// todoList.after(newTodoItem);





// clone nodes
// const todoList = document.querySelector(".todo-list");
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "new todo";
// // const li2 = li.cloneNode(true);
// ul.append = (li);
// // ul.prepend = (li2);

// console.log(ul.children);




// give the dimensions of element
// const sectionTodo = document.querySelector(".section-todo");
// const info = sectionTodo.getBoundingClientRect().top;
// console.log(info);






// static list

// const listItems = document.querySelectorAll(".todo-list li");
// const nextLi = document.createElement("li");
// nextLi.textContent = "next list";
// const ul = document.querySelector(".todo-list");
// ul.append(nextLi);
// console.log(listItems);




// live list

// const ul = document.querySelector(".todo-list");
// const listItems = ul.getElementsByTagName("li");
// const nextLi = document.createElement("li");
// nextLi.textContent = "next item";
// ul.append(nextLi);

// console.log(listItems);







// .preventDefault()

// whenever we submit the submit button of the form it refreshes every time. to prevent this we can use .preventDefault()

// const todoForm = document.querySelector(".form-todo");
// todoForm.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     console.log("event submitted");
// })