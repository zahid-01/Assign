// Function to calculate the area of a circle
function calculateCircleArea(radius) {
  // Area formula: π * r^2
  return Math.PI * Math.pow(radius, 2);
}

// Example value
var radius = 10;  // Replace with your radius value

// Calculate the area
var circleArea = calculateCircleArea(radius);

// Display the result
console.log("Radius: " + radius);
console.log("Area of the circle: " + circleArea.toFixed(2));
