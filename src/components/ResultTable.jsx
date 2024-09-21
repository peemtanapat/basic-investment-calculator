import { calculateInvestmentResults } from "../util/investment";

export default function ResultTable({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  return (
    <table id="result">
      <thead>
        <tr>
          <th style={{ width: "50px" }}>Year</th>
          <th style={{ width: "150px" }}>Capital (Year)</th>
          <th style={{ width: "150px" }}>Interest (Year)</th>
          <th style={{ width: "150px" }}>Total Interest</th>
          <th style={{ width: "150px" }}>Total Asset</th>
        </tr>
      </thead>
      <tbody>
        {annualData.map((row) => {
          return (
            <tr key={row.year}>
              <td>{row.year}</td>
              <td>{row.annualInvestedCapital}</td>
              <td>{row.interest}</td>
              <td>{row.totalInterest}</td>
              <td>{row.valueEndOfYear}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
