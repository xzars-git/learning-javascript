function fibonacci(n) {
    const fib = [0, 1]
    for (let i = 2; i < n; i++){
        fib[i] = fib[i - 1] + fib[i - 2]
    }
    return fib
}


console.log(fibonacci(10)) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
console.log(fibonacci(20)) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181]
console.log(fibonacci(30)) // [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987, 1597, 2584, 4181, 6765, 10946, 17711, 28657, 46368, 75025, 121393, 196418, 317811]
