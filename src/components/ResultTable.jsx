export default function ResultTable({ annualData }) {
  return (
    <div id="result">
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {annualData.map((row) => {
            return (
              <tr>
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
