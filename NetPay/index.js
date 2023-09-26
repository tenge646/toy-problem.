
const readline = require("readline");
const { calculatePayee, calculateNHIF, calculateNSSF , } = require("./netpay");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});


rl.question("Enter your basic salary: ", (basicSalaryInput) => {
  const basicSalary = parseFloat(basicSalaryInput);

  rl.question("Enter your benefits: ", (benefitsInput) => {
    const benefits = parseFloat(benefitsInput);


   
    const grossSalary = basicSalary + benefits;
    const payee = calculatePayee(grossSalary);
    const nhif = calculateNHIF(grossSalary);
    const nssf = calculateNSSF(grossSalary);
    const netSalary = grossSalary - (payee + nhif + nssf);

    
    console.log(`Basic Salary: ${basicSalary}`);
    console.log(`Benefits: ${benefits}`);
    console.log(`Gross Salary: ${grossSalary}`);
    console.log(`Payee (Tax): ${payee}`);
    console.log(`NHIF Deductions: ${nhif}`);
    console.log(`NSSF Deductions: ${nssf}`);
    console.log(`Net Salary: ${netSalary}`);

    
    rl.close();
  });
});


