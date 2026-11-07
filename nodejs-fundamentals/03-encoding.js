const fs = require("node:fs");

// Read file as Buffer
const rawData = fs.readFileSync("message.txt");

console.log("Without UTF-8:");
console.log(rawData);

// Read file as text
const textData = fs.readFileSync("message.txt", "utf8");

console.log("With UTF-8:");
console.log(textData);