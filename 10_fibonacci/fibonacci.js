const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    num = Number(num);
    let fib = [1, 1];
    for (let i = 2; i < num; i++) {
        fib.push(fib[i - 2] + fib[i - 1]);
    }
    return fib.pop()
};

// Do not edit below this line
module.exports = fibonacci;
