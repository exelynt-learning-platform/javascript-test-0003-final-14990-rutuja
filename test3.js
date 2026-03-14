let rows = 6;

for (let i = 1; i <= rows; i++) {
  let rowOutput = "";
  for (let j = 1; j <= i; j++) {
    // Logic: If (row + column) is even, print 1, else 0
    // To match your specific pattern starting with 1:
    if ((i + j) % 2 === 0) {
      rowOutput += "1";
    } else {
      rowOutput += "0";
    }
  }
  console.log(rowOutput);
}