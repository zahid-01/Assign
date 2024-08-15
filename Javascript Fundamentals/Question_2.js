function regexTest(pattern, string) {
  const regex = new RegExp(pattern);
  return regex.test(string);
}

// Example usage:
console.log(regexTest("\\d", "There is a number 5 here.")); // true (matches any digit)
console.log(regexTest("hello", "Hello world")); // false (case-sensitive by default)
console.log(regexTest("^hello", "hello world")); // true (matches 'hello' at the start)
console.log(regexTest("world$", "hello world")); // true (matches 'world' at the end)
