## CSCI E114 Jamstack
### Week 3 - "Advanced" Javascript and the NodeJS Ecosystem

These examples walk through the lecture demonstration on Promises and async/await. Clone this repo to your local machine and run `npm install` to install the *node-fetch* dependency.

+ 00-asynchronous.js shows a complete fetch() Promise example with error handling
+ 01-demonstrate_node.js is a simple program you can run at the command-line with `node 0-1demonstrate-node` 
+ 02-promises creates a promise (Producer) and acts upon its resolution (Consumer)
+ 03-fetch-promise.js replaces the promise we created in 02- with a promise provided by fetch()
+ 04-await-promises.js uses the `await` keyword to handle a Promise, mixing the methods but showing that `async/await` IS Promises
+ 05-await-fetch-promise is a fully async/await solution to a fetch() exxample
+ 06-await-fetch-promise-errors adds error handling and `finally()`
+ 07-fetch-promise-all shows an example in which you would require Promise syntax over async/await - when you need Promise.all

