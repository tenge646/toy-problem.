const readline = require("readline");
const Grade = require("./grading");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the student's mark (between 0 and 100): ", (input) => {
  const mark = parseFloat(input);

  if (!isNaN(mark) && mark >= 0 && mark <= 100) {
    const grade = Grade(mark);
    console.log(`The grade is: ${grade}`);
  } 
    

  rl.close();
});
