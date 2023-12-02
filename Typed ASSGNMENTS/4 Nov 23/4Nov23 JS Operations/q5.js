// Function to calculate simple interest
function calculateSimpleInterest(principal, rate, time) {
  // Simple interest formula: (principal * rate * time) / 100
  return (principal * rate * time) / 100;
}

// Example values
var principalAmount = 1000;  // Replace with your principal amount
var interestRate = 5;       // Replace with your interest rate
var timePeriod = 2;         // Replace with your time period in years

// Calculate simple interest
var simpleInterest = calculateSimpleInterest(principalAmount, interestRate, timePeriod);

// Display the result
console.log("Principal Amount: $" + principalAmount);
console.log("Interest Rate: " + interestRate + "%");
console.log("Time Period: " + timePeriod + " years");
console.log("Simple Interest: $" + simpleInterest.toFixed(2));
