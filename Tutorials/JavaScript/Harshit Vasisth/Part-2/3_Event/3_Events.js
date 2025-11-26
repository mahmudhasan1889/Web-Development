// const btn = document.querySelector(".btn");
// console.log(btn);
// btn.onclick = function(){
//     console.log("You clicked me");
// }


// .addEventListener()

// btn.addEventListener("mouseover", function(){
//     console.log("you clicked me");
//     console.log(this);
// })


// btn.addEventListener("click", () => {
//     console.log("you clicked me");
//     console.log(this);
// })







// addEventListener in different buttons

const allButtons = document.querySelectorAll(".my-buttons button");

// for(let button of allButtons){
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// }


// for(let i=0; i<allButtons.length; i++){
//     allButtons[i].addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// }



// allButtons.forEach(function(button){
//     button.addEventListener("click", function(){
//         console.log(this.textContent);
//     })
// })













// Event Object
// allButtons[0].addEventListener("click", function(eventObject){
//     console.log(eventObject);
// })

// for(let button of allButtons){
//     button.addEventListener("click", (e)=>{
//         // console.log(e.currentTarget);
//         console.log(e.target);
//     })
// }


// allButtons.forEach((button)=>{
//     button.addEventListener("click", e =>{
//         console.log(e.currentTarget.textContent);
//     })
// })

// allButtons.forEach((button)=>{
//     button.addEventListener("click", e=>{
//         e.target.style.backgroundColor = "yellow";
//         e.target.style.color = "#333";
//     })
// })














// Random color generator
// const mainButton = document.querySelector("button");
// const container = document.querySelector(".container");
// const currentColor = document.querySelector(".current-color");
// // console.log(currentColor.textContent);

// function randomColorGenerator(){
//     const red = Math.floor(Math.random()*256);
//     const green = Math.floor(Math.random()*256);
//     const blue = Math.floor(Math.random()*256);
//     const randomColor = `rgb(${red}, ${green}, ${blue})`;
//     return randomColor;
// }

// mainButton.addEventListener("click", ()=>{
//     const randomColor = randomColorGenerator();
//     container.style.backgroundColor = randomColor;
//     currentColor.textContent = randomColor;
// })





// keypress event
// const body = document.body;
// body.addEventListener("keypress", (e)=>{
//     console.log(e.key);
// })




// mouseover and mouseleave event
// mainButton.addEventListener("mouseover", ()=>{
//     console.log("mouse over event occurred");
// })

// mainButton.addEventListener("mouseleave", ()=>{
//     console.log("mouse leave event occurred");
// })



















// Event 1.Bubbling/propagation
     //  2.Capturing
     //  3.Delegation

const grandParent = document.querySelector(".grand-parent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

child.addEventListener("click", ()=>{
    console.log("you clicked on child");
}, true)

parent.addEventListener("click", ()=>{
    console.log("you clicked on parent");
}, true)

grandParent.addEventListener("click", ()=>{
    console.log("you clicked on grandparent");
}, true)

document.body.addEventListener("click", ()=>{
    console.log("you clicked on body");
}, true)