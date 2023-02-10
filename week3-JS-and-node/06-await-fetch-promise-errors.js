
(async function(){
    const fetch = require('node-fetch');

    // Compare to 05-await-fetch-promises.js example.
    try{
        let response = await fetch('https://www.learningapi.com/cscie3/ajax.php');
        let jsonValue = await response.json();
        console.log(jsonValue);
    }catch(err){
        console.log(`'catch'-ed the error: ${err}`);    
    }finally{
        console.log("finally: we are done");
    }
})();