function outerFunction(param) {
  let outerVariable = "I'm an outer variable";

  return function innerFunction() {
    console.log(`Parameter: ${param}`);
    console.log(`Outer Variable: ${outerVariable}`);
  };
}

// Example usage:
const myInnerFunction = outerFunction("Hello!");
myInnerFunction(); // Even though outerFunction has finished, innerFunction can still access its variables.
