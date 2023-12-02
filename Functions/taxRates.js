function calculateTax() {
  const taxRates = [
    { range: 10000, rate: 0.1 },
    { range: 30000, rate: 0.15 },
    { range: 60000, rate: 0.2 },
    { range: Infinity, rate: 0.25 },
  ];

  return function (income) {
    let tax = 0;

    for (const { range, rate } of taxRates) {
      if (income <= range) {
        tax += income * rate;
        break;
      } else {
        tax += range * rate;
        income -= range;
      }
    }

    return tax;
  };
}

const calculateTaxForIncome = calculateTax();

console.log("Tax for income $5000:", calculateTaxForIncome(5000));
console.log("Tax for income $15000:", calculateTaxForIncome(15000));
console.log("Tax for income $45000:", calculateTaxForIncome(45000));
console.log("Tax for income $80000:", calculateTaxForIncome(80000));
