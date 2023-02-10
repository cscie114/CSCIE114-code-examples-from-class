(async function(){
let promise = new Promise(function(resolve, reject) {
     // This is where the executor function that does the work
	//  of the Promise goes. When your work is done, you call
	//  one of the functions given to you by the Promise API:
	//  resolve(value) or reject(error).
    console.log('calling timed function');
    setTimeout(()=> resolve("I am done"), 2000);
    // reject("This is an error - ");
})

let value = await promise;
// value passed to then() by the Promise is the argument from resolve()
console.log(`value in then() is ${value}`);

//.finally(()=>console.log("finally: we are done") )
//.catch( err => console.log(`'catch'-ed the error: ${err}`));
})();