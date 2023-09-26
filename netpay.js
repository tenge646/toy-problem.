// Function to calculate Payee (Tax) based on the basic salary
function calculatePayee(basicSalary) {
    // Define tax brackets and rates
    const taxBrackets = [
      { lower: 0, upper: 12298, rate: 0.1 },
      { lower: 12299, upper: 23885, rate: 0.15 },
      { lower: 23886, upper: 35472, rate: 0.2 },
      { lower: 35473, upper: 47059, rate: 0.25 },
      { lower: 47060, upper: 58645, rate: 0.3 },
      { lower: 58646, upper: Infinity, rate: 0.35 },
    ];
  
    // Calculate tax based on the tax brackets
    let tax = 0;
    for (const bracket of taxBrackets) {
      const { lower, upper, rate } = bracket;
      if (basicSalary <= lower) {
        continue;
      } else if (basicSalary <= upper) {
        tax += (basicSalary - lower) * rate;
        break;
      } else {
        tax += (upper - lower) * rate;
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
  
 