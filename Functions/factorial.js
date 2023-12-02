function factorial(n) {
  if (n < 0) return null;
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

console.log("Factorial of 0:", factorial(0));
console.log("Factorial of 5:", factorial(5));
console.log("Factorial of 8:", factorial(8));
console.log("Factorial of 10:", factorial(10));
