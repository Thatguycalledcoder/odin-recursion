function fib(num) {
    return (num === 0 || num === 1) ? 1 : num + fib(num - 1);
}

function getFib(fib) {
    console.log(`Fib sequence: ${fib}`)
}

getFib(fib(5));