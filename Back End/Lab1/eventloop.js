console.log("This is the starting point of my code.");
process.nextTick(()=> {
    console.log("This is process,nextTick operation.");
});
setTimeout(()=> {
    console.log("This is first timeout operation");
},10000);
console.log("This is the end point of my code.");
setTimeout(()=>{
    console.log("This is second timeout operation.");
},5000);

new Promise((resolve , reject) => {
    let success = true;
    if(success) resolve("Data load Succesfull");
    else reject("Data loading Failed");
})
.then((message) => {
    console.log(message);
})
.catch((message) => {
    console.log(message);
})