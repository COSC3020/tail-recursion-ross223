function myFib(num){
    var fib1 = 0;
    var fib2 = 1;
    return tailFib(num, fib1, fib2);
}

function tailFib(num, fib1, fib2){
    if (num == 1) {
        return fib2;
    }
    if (num == 0) {
        return fib1;
    }
    return tailFib(num - 1, fib2, fib1 + fib2);
}

module.exports = {myFib, tailFib};  // Jacob Morgan taught me how to do this module export thing for the testing
