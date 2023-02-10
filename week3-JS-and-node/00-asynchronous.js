const fetch = require('node-fetch');

fetch('https://developer.nps.gov/api/v1/parks?stateCode=MA&api_key=cHjjwluQTMSCbWeIerZcF13Xwo8CHIscvo0duxX',
{
    headers: {
        "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/74.0.3729.169 Safari/537.36"
    }
})
.then((response)=>{
    return response.text()
    //  .then(response => response.json())
})
.then((data)=>{
    console.log(data)
})
.catch((error)=>{console.log(error.message)});

