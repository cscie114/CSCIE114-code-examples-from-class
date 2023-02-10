(async function(){
    const fetch = require('node-fetch');

    // Compare to 02-promises.js example. Here, fetch() creates and returns a promise
    // See fetch source code: https://github.com/node-fetch/node-fetch/blob/main/src/index.js 
    //  where the Promise is created on line 49, and resolve() is called from various points.
    let response = await fetch('https://www.learningapi.com/cscie3/ajax.php')
    let jsonValue = await response.json();
    console.log(jsonValue);

})();