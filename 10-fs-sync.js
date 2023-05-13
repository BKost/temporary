const { readFileSync, writeFileSync } = require("fs");

console.log("Start");

const first = readFileSync("./content/first.txt", "utf-8");
const second = readFileSync("./content/second.txt", "utf-8");

// 3 parameters:
// where to create file
// value of the file
//options object

// If the file is not there, Node will create one and
// if the file already exists the Node wil overwrite it. not sure about this fact
writeFileSync(
  "./content/result-sync.txt",
  `Here is the result : ${first}, ${second}`,
  { flag: "a" }
);

console.log("Done with the task");
console.log("Starting next task");
