const fs = require("node:fs");

// Step 1: Create a file
fs.writeFileSync(
    "message.txt",
    "I am learning Backend Engineering!"
);

console.log("File created successfully");

// Step 2: Read the file
const data = fs.readFileSync("message.txt", "utf-8");

console.log("File content:", data);

// Step 3: Update the file
fs.appendFileSync(
    "message.txt",
    "\nNode.js is powerful!"
);

console.log("File updated successfully");

// Step 4: Read updated content
const updatedData = fs.readFileSync("message.txt", "utf-8");

console.log("Updated content:", updatedData);