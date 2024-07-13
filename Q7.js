function generateFibonacci(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    const fibSequence = [0, 1];
    for (let i = 2; i < n; i++) {
        fibSequence.push(fibSequence[i - 1] + fibSequence[i - 2]);
    }
    return fibSequence;
}

const n = 10;
const fibonacciSequence = generateFibonacci(n);
console.log(`First ${n} numbers of the Fibonacci sequence:`, fibonacciSequence);
