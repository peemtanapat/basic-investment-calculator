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
    <div id="result">
      <table>
        <thead>
          <tr>
            <th style={{ width: "50px" }}>Year</th>
            <th style={{ width: "150px" }}>Investment Value</th>
            <th style={{ width: "150px" }}>Interest (Year)</th>
            <th style={{ width: "150px" }}>Total Interest</th>
            <th style={{ width: "150px" }}>Total</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map((row) => {
            return (
              <tr key={row.year}>
                <td>{row.year}</td>
                <td>{row.annualInvestment}</td>
                <td>{row.interest}</td>
                <td>{row.interest}</td>
                <td>{row.valueEndOfYear}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
