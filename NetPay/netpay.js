
function calculatePayee(basicSalary) {
    
    const taxBrackets = [
      { minimum: 0, maximum: 24000, rate: 0.1 },
      { minimum: 24000, maximum: 32333, rate: 0.25 },
      { minimum: 32334, maximum: 500000, rate: 0.30 },
      { minimum: 500001, maximum: 800000, rate: 0.325 },
      { minimum: 800001, maximum: Infinity, rate: 0.35 },
    ];
  
    // Calculate tax based on the tax brackets
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
  
  // Function to calculate NHIF deductions based on the basic salary
  function calculateNHIF(basicSalary) {
    // Define NHIF rates
    const nhifRates = [400, 600, 800, 1200, 1500];
  
    // Determine the NHIF rate based on the basic salary
    let nhif = 0;
    for (const rate of nhifRates) {
      if (basicSalary <= rate) {
        nhif = basicSalary * 0.075;
        break;
      }
    }
    return nhif;
  }
  
  // Function to calculate NSSF deductions based on the basic salary
  function calculateNSSF(basicSalary) {
    // Define NSSF rate
    const nssfRate = 0.06; // 6% of the basic salary
  
    // Calculate NSSF deductions
    const nssf = basicSalary * nssfRate;
    return nssf;
  }
  
 module.exports ={   
 calculatePayee,
 calculateNHIF,
 calculateNSSF,
 }
