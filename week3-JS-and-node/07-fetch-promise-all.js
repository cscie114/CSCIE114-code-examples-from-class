
let promiseList = new Array();
for (let i=0; i<5; i++){
    // create a list of promises for our fetch() calls (and their responses' content)
    promiseList.push(fetch('https://www.learningapi.com/cscie3/ajax.php').then( response => {
    return response.json();
 }))  
}
// Promise.all will resolve when all of the Promises are resolved. 
Promise.all( promiseList )
.then (results => {
   // value passed to then() by the Promise is the argument fetch passed to resolve()
   console.log(results);
})
.finally(()=>console.log("finally: we are done") )
.catch( err => console.log(`'catch'-ed the error: ${err}`));