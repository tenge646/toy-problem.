const readline = require("readline");
const speedDetector = require("./speed");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter the speed of the car (in km/h): ", function (speedInput) {
  const speed = parseFloat(speedInput);

 
  speedDetector(speed);

  rl.close(); 
});


