function fib(num) {
    let total = 0;
    for (let i = 1; i <= num; i++) {
        total += i;
    }
    return total;
}

function fibsRec(num) {
    return (num === 0 || num === 1) ? 1 : num + fib(num - 1);
}

function getFib(fib) {
    console.log(`Fib sequence: ${fib}`)
}

getFib(fib(5));
getFib(fibsRec(5));

// function merge sort