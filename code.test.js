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

var randint = Math.floor(Math.random() * 100);

assert(code.myFib(randint) == fib(randint))


