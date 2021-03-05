function printItems(numValue, stringValue, boolValue) {
  console.log(`Number: ${numValue}`);
  console.log(`String: ${stringValue}`);
  console.log(`Boolean: ${boolValue}`);
}
let myArray = [100, "Adam", true];

let otherArray = [...myArray, 1, "ee", false];

// printItems(myArray[0], myArray[1], myArray[2]);
printItems(...otherArray);
