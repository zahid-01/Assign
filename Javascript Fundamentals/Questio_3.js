function findCharacterClasses(string) {
  const digitPattern = /\d/g;
  const upperCasePattern = /[A-Z]/g;
  const lowerCasePattern = /[a-z]/g;
  const specialCharPattern = /[\W_]/g;

  return {
    digits: string.match(digitPattern),
    upperCaseLetters: string.match(upperCasePattern),
    lowerCaseLetters: string.match(lowerCasePattern),
    specialCharacters: string.match(specialCharPattern),
  };
}

// Example usage:
const result = findCharacterClasses("Hello World! 123.");
console.log(result);
// {
//   digits: ["1", "2", "3"],
//   upperCaseLetters: ["H", "W"],
//   lowerCaseLetters: ["e", "l", "l", "o", "o", "r", "l", "d"],
//   specialCharacters: [" ", "!", " ", "."]
// }
