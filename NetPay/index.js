
const readline = require("readline");
const { calculatePayee, calculateNHIF, calculateNSSF , } = require("./netpay");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Prompt for basic salary and benefits
rl.question("Enter your basic salary: ", (basicSalaryInput) => {
  const basicSalary = parseFloat(basicSalaryInput);

  rl.question("Enter your benefits: ", (benefitsInput) => {
    const benefits = parseFloat(benefitsInput);

    // Calculate payee (tax), NHIF deductions, NSSF deductions, gross salary, and net salary
    const payee = calculatePayee(basicSalary);
    const nhif = calculateNHIF(basicSalary);
    const nssf = calculateNSSF(basicSalary);
    const grossSalary = basicSalary + benefits;
    const netSalary = grossSalary - (payee + nhif + nssf);

    // Display the results
    console.log(`Basic Salary: ${basicSalary}`);
    console.log(`Benefits: ${benefits}`);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Payee (Tax): ${payee}`);
    console.log(`NHIF Deductions: ${nhif}`);
    console.log(`NSSF Deductions: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);

    // Close the readline interface
    rl.close();
  });
});


