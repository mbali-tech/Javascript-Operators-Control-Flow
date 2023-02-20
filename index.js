//answer to question 3

let classGroup = prompt("Enter your class group (Science, Social Science, Arts):");
let subjects;

if (classGroup === "Science") {
  subjects = "Physics, Chemistry, Biology, Technical Drawing, English, Mathematics";
} else if (classGroup === "Social Science") {
  subjects = "Accounting, Commerce, Marketing, Geography, English, Mathematics";
} else if (classGroup === "Arts") {
  subjects = "Government, Economics, Literature, History, English, Mathematics";
} else {
  subjects = "English, Mathematics";
  console.log("Invalid class group. Taking General subjects.");
}

console.log(`You will be taking the following subjects: ${subjects}`);


// answer to question 5

let num = parseInt(prompt("Enter a positive number: "));
let pwr = Math.pow(2, Math.round(Math.log2(num)));

console.log(`The number ${pwr} is the power of 2 nearest to ${num}.`);
