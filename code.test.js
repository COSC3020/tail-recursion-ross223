const assert = require("assert");
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

var randint = Math.floor(Math.random() * 10);  // This website was helpful for Math.random https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random

assert(code.myFib(randint) == fib(randint))


