const fetch = require('node-fetch');

let promise = fetch('https://www.learningapi.com/cscie3/ajax.php')
.then( response => {
   // value passed to then() by the Promise is the argument fetch passed to resolve()
   return response.json();
}).then( jsonValue => console.log(jsonValue))
.finally(()=>console.log("finally: we are done") )
.catch( err => console.log(`'catch'-ed the error: ${err}`));