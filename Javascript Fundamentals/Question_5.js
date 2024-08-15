function estimateDeliveryTime(packageType) {
  let deliveryTime;

  switch (packageType) {
    case "standard":
      deliveryTime = "3-5 days";
      break;
    case "express":
      deliveryTime = "1-2 days";
      break;
    case "overnight":
      deliveryTime = "next day";
      break;
    default:
      deliveryTime = "Unknown package type";
  }

  console.log(`Estimated delivery time: ${deliveryTime}`);
}

// Example usage:
estimateDeliveryTime("standard"); // Estimated delivery time: 3-5 days
estimateDeliveryTime("express"); // Estimated delivery time: 1-2 days
estimateDeliveryTime("overnight"); // Estimated delivery time: next day
estimateDeliveryTime("international"); // Estimated delivery time: Unknown package type
