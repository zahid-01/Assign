function extractDateParts(pattern, string) {
  const regex = new RegExp(pattern);
  const match = regex.exec(string);
  if (match) {
    return {
      day: match[1],
      month: match[2],
      year: match[3],
    };
  } else {
    return null;
  }
}

// Example usage:
const datePattern = /(\d{2})-(\d{2})-(\d{4})/;
const dateStr = "The event is on 15-08-2024.";
const dateParts = extractDateParts(datePattern, dateStr);
console.log(dateParts);
// { day: "15", month: "08", year: "2024" }
