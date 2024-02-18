import * as Utils from '../util/investment';

export default function InvestmentResult({ values }) {
  const initialInvestment = values.initialInvestment;
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment Value</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {Utils.calculateInvestmentResults(values).map((data, index, array) => {
          const { annualInvestment, interest, valueEndOfYear, year } = data;
          return (
            <tr key={year}>
              <td>{year}</td>
              <td>{Utils.formatter.format(valueEndOfYear)}</td>
              <td>{Utils.formatter.format(interest)}</td>
              <td>
                {Utils.formatter.format(
                  array
                    .slice(0, index + 1)
                    .reduce((acc, curr) => acc + curr.interest, 0)
                )}
              </td>
              <td>
                {Utils.formatter.format(
                  year * annualInvestment + initialInvestment
                )}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
