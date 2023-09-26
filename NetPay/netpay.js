
function calculatePayee(basicSalary) {
    
    const taxBrackets = [
      { minimum: 0, maximum: 24000, rate: 0.1 },
      { minimum: 24000, maximum: 32333, rate: 0.25 },
      { minimum: 32334, maximum: 500000, rate: 0.30 },
      { minimum: 500001, maximum: 800000, rate: 0.325 },
      { minimum: 800001, maximum: Infinity, rate: 0.35 },
    ];
  
   
    let tax = 0;
    for (const bracket of taxBrackets) {
      const { minimum, maximum, rate } = bracket;
      if (basicSalary <= minimum) {
        continue;
      } else if (basicSalary <= maximum) {
        tax += (basicSalary - minimum) * rate;
        break;
      } else {
        tax += (maximum - minimum) * rate;
      }
    }
    return tax;
  }
  
  
  
  function calculateNHIF(basicSalary) {
   
    const nhifRates = [400, 600, 800, 1200, 1500];
  
    
    let nhif = 0;
    for (const rate of nhifRates) {
      if (basicSalary <= rate) {
        nhif = basicSalary * 0.075;
        break;
      }
    }
    return nhif;
  }
  

  function calculateNSSF(basicSalary) {
   
    const nssfRate = 0.06; 
  
   
    const nssf = basicSalary * nssfRate;
    return nssf;
  }
  
 module.exports ={   
 calculatePayee,
 calculateNHIF,
 calculateNSSF,
 }
