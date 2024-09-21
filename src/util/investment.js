// This function expects a JS object as an argument
// The object should contain the following properties
// - initialInvestment: The initial investment amount
// - annualInvestment: The amount invested every year
// - expectedReturn: The expected (annual) rate of return
// - duration: The investment duration (time frame)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const year = i + 1;
    const annualInvestedCapital = initialInvestment + annualInvestment * year;
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    const totalInterest =
      investmentValue - annualInvestment * year - initialInvestment;

    annualData.push({
      year, // year identifier
      annualInvestedCapital: formatter.format(annualInvestedCapital),
      interest: formatter.format(interestEarnedInYear), // the amount of interest earned in this year
      totalInterest: formatter.format(totalInterest),
      valueEndOfYear: formatter.format(investmentValue), // investment value at end of year
      annualInvestment: formatter.format(annualInvestment), // investment added in this year
    });
  }

  return annualData;
}

// The browser-provided Intl API is used to prepare a formatter object
// This object offers a "format()" method that can be used to format numbers as currency
// Example Usage: formatter.format(1000) => yields "$1,000"
export const formatter = new Intl.NumberFormat("en-US", {
  // style: "currency",
  // currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
