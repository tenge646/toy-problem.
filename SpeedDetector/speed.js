function speedDetector(speed) {
    const speedLimit = 70;
    const demeritPoints = Math.floor((speed - speedLimit) / 5);
  
    if (speed <= speedLimit) {
      console.log("The speed is Okay");
    } else if (demeritPoints <= 12) {
      console.log("Points: " + demeritPoints);
    } else {
      console.log("License suspended");
    }
  }
  module.exports = speedDetector;
