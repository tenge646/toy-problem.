
function calculatePayee(grossSalary) {
    
    const taxBrackets = [
      { minimum: 0, maximum: 24000, rate: 0.1 },
      { minimum: 24000, maximum: 32333, rate: 0.25 },
      { minimum: 32334, maximum: 500000, rate: 0.30 },
      { minimum: 500001, maximum: 800000, rate: 0.325 },
      { minimum: 800001, maximum: Infinity, rate: 0.35 },
    ];
  
   
    let tax = 0;
    for (const { minimum, maximum, rate } of taxBrackets) {
      if (grossSalary <= minimum) {
        continue;
      } else if (grossSalary <= maximum) {
        tax += (grossSalary - minimum) * rate;
        break;
      } else {
        tax += (maximum - minimum) * rate;
      }
    }
    return tax;
  }
  

  
  function calculateNHIF(grossSalary) {
   
    const nhifRates = [ 
      { minimum: 0, maximum: 5999, rate: 150 },
      { minimum: 6000, maximum: 7999, rate: 300 },
      { minimum: 8000, maximum: 11999, rate: 400 },
      { minimum: 12000, maximum: 14999, rate: 500},
      { minimum: 15000, maximum: 19999, rate: 600 },
      { minimum: 20000, maximum: 24999, rate: 750 }, 
      { minimum: 25000, maximum: 29999, rate: 850 },
      { minimum: 30000, maximum: 34999, rate: 900 },
      { minimum: 35000, maximum: 39999, rate: 950 }, 
     ];
  
    
    let nhif = 0;
    for (const {minimum,maximum,rate} of nhifRates) {
      if (grossSalary <= maximum) {
        nhif = rate ;
        break;
      }
    }
    return nhif;
  }
  

  function calculateNSSF(grossSalary) {
    const nssfRate = 0.06;
    const nssf = grossSalary * nssfRate;
    return nssf;
  }
  
  module.exports = {
    calculatePayee,
    calculateNHIF,
    calculateNSSF,
  };
  