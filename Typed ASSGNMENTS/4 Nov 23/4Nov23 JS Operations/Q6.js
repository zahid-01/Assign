// Function to calculate BMI
function calculateBMI(weight, height) {
  // BMI formula: weight (kg) / (height (m) * height (m))
  return weight / (height * height);
}

// Example values
var weightInKg = 70;    // Replace with your weight in kilograms
var heightInMeters = 1.75;  // Replace with your height in meters

// Calculate BMI
var bmi = calculateBMI(weightInKg, heightInMeters);

// Display the result
console.log("Weight: " + weightInKg + " kg");
console.log("Height: " + heightInMeters + " m");
console.log("BMI: " + bmi.toFixed(2));
