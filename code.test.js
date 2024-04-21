/*const assert = require("assert");
const code = require("./code.js");

function fib(n) {
    if (n == 1) {
        return 1;
    }
    if (n == 0) {
        return 0;
    }
    return fib(n-1) + fib(n-2);
}

randint = Math.floor(Math.random() * 100);

assert(code.myFib(randint) == fib(randint))
*/

const code = require("./code.js");
const assert = require("assert");


function fib(n) { //recursive fib function taken from the lecture slides
  if (n == 0)
    return 0;
  if(n <= 2) 
    return 1;
  else 
    return fib(n-1) + fib(n-2);
}

///////////Test 1 
let n = 0; //base case 
assert(fib(n) == code.myFib(n));


///////////Test 2 
n = 1; //base case 
assert(fib(n) == code.myFib(n));


///////////Test 3 
n = 6; 
assert(fib(n) == code.myFib(n));


///////////Test 3 
n = 6; 
assert(fib(n) == code.myFib(n));


///////////Test 4
n = 15; 
assert(fib(n) == code.myFib(n));

