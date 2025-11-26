// Asynchronous JavaScript And XML

// to use HTTP request
// is a set of web development techniques used on the client side to create asynchronous web applications

// with AJAX, web applications can send and retrieve data from a server anychronously(in the background), without interferring with the display and behaviour of the existing page.

// we don't use data in XML format anymore
// we use JSON now



// we have 3 most common ways to create and send request to server
// 1. xmlHTTPRequest (old way of doing) - XHR
// 2. fetch API (new way of doing)
// 3. axios (this is third party library)


// JSON = JavaScrip Object Notation





// XHR
// const xhr = new XMLHttpRequest();
// console.log(xhr);

// we use http request to use API
// backend developer creates API

// methods for http requests
// GET  POST  PUT  PATCH  DELETE




// XHR ready states
// value| state  | Description
// 0    | UNSENT | client has been created. open() not called yet
// 1    | OPENED | open() has been called
// 2    |Headers_Recieved| send() has been called and headers and                       status are available
// 3    |LOADING | Downloading, responseText holds partial data
// 4    |DONE    | The operation is complete






// status code  --> determines if the response are received perfectly
// response are being found in JSON string

// 1xx --> informational response
// 2xx --> successful
// 3xx --> redirection
// 4xx --> client error
// 5xx --> server error


// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest;
// console.log(xhr.readyState);
// xhr.open("GET", URL);
// console.log(xhr.readyState);

// // xhr.onreadystatechange = function(){
// //     console.log(xhr.readyState);
// //     if(xhr.readyState === 4){
// //         console.log(xhr);
// //         const response = xhr.response;
// //         const data = JSON.parse(response);
// //         console.log(typeof data);
// //     }
// // }

// // or 

// xhr.onload = function(){
//     console.log(xhr.readyState);
//     const response = xhr.response;
//     const data = JSON.parse(response);
//     console.log(data);
// }

// xhr.send();






// error handling
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", URL);

// xhr.onload = ()=>{
//     if(xhr.status >= 200 && xhr.status < 300){
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//     }else{
//         console.log("Something went wrong");
//     }
// }

// xhr.onerror = ()=>{
//     console.log("network error");
// }

// xhr.send();










// getting particular object from a JSON object from URL
// const URL = "https://jsonplaceholder.typicode.com/posts";
// const xhr = new XMLHttpRequest();
// xhr.open("GET", URL);

// xhr.onload = ()=>{
//     if(xhr.status >= 200 && xhr.status < 300){
//         const data = JSON.parse(xhr.response);
//         console.log(data);
//         const id = data[3].id;
//         const xhr2 = new XMLHttpRequest();
//         const URL2 = `${URL}/${id}`;
//         console.log(URL2);
//         xhr2.open("GET", URL2);
//         xhr2.onload = ()=>{
//             const data2 = JSON.parse(xhr2.response);
//             console.log(data2);
//         }
//         xhr2.send();
//     }else{
//         console.log("Something went wrong");
//     }
// }

// xhr.send();






// getting specific object through id with promise
// const URL = "https://jsonplaceholder.typicode.com/posts";
// function sendRequest(method, url){
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();
//         xhr.open(method, url);
//         xhr.onload = ()=>{
//             if(xhr.status >= 200 && xhr.status < 300){
//                 resolve(xhr.response);
//             }else{
//                 reject(new Error("Something went wrong"));
//             }
//         }

//         xhr.onerror = ()=>{
//             reject(new Error("Something went wrong"));
//         }

//         xhr.send();
//     })
// }

// sendRequest("GET", URL)
// .then((response)=>{
//     const data = JSON.parse(response);
//     console.log(data);
//     return data;
// })
// .then((data)=>{
//     const id = data[3].id;
//     return id;
// })
// .then((id)=>{
//     const url = `${URL}/${id}`;
//     return sendRequest("GET", url);
// })
// .then((newResponse)=>{
//     const newData = JSON.parse(newResponse);
//     console.log(newData);
// })
// .catch((error)=>{
//     console.log(error);
// })











// fetch  --> this can send http requests automatically and can receive response as well

// const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL)
// .then(response=>{
//     return response.json();
// })
// .then(data=>{
//     console.log(data);
// })









// error handling
// fetch only resolves. 
// reject happens only when network is disconnected

// so other than internet disconnection no matter what happens fecth always runs .then block
// fetch(URL)
// .then(response=>{
//     if(response.ok){
//         return response.json();
//     }else{
//         throw new Error("Something went wrong");
//     }
// })
// .then(data=>{
//     console.log(data);
// })
// .catch(error=>{
//     console.log("inside catch");
//     console.log(error);
// })










// post method with fetch
// post method --> to create new object/content and insert it

// const URL = "https://jsonplaceholder.typicode.com/posts";
// fetch(URL, {
//     method: "POST",
//     body: JSON.stringify({
//         title: "foo",
//         body: "bar",
//         userID: 1
//     }),
//     headers: {
//         "content-type": `application/json, charset=UTF-8`
//     }
// })
// .then(response=>{
//     if(response.ok){
//         return response.json();
//     }else{
//         throw new Error("Something went wrong");
//     }
// })
// .then(data=>{
//     console.log(data);
// })
// .catch(error=>{
//     console.log("inside catch");
//     console.log(error);
// })












// Async await
// async --> makes a normal function to return promise
// await --> waits until promise is resolved. when the promise is resolved is returns with a value. await returns with that value.

// the job of async await is done in the browser

// const URL = "https://jsonplaceholder.typicode.com/posts";
// async function getPosts() {
//     const response = await fetch(URL);
//     if(!response.ok){
//         throw new Error("Something went wrong");
//     }
//     const data = await response.json();
//     return data;
// }

// getPosts()
// .then(myData=>{
//     console.log(myData);
// })
// .catch(error=>{
//     console.log("inside catch");
//     console.log(error);
// })