export default function InvestmentInput({ setValues }) {
  function validateInput(event, fallbackValue = 0) {
    if (event.target.value < 0) {
      alert('Please enter a non negative number');
      event.target.value = fallbackValue;
    }
    return +event.target.value;
  }

  function handleChange(event, key) {
    setValues((prev) => {
      return {
        ...prev,
        [key]: validateInput(event, prev[key]),
      };
    });
  }

  return (
    <div id="user-input">
      <div className="input-group">
        <label>
          Initial Investment:
          <input
            type="number"
            required
            onChange={(event) => handleChange(event, 'initialInvestment')}
          />
        </label>
        <label>
          Annual Investment:
          <input
            type="number"
            required
            onChange={(event) => handleChange(event, 'annualInvestment')}
          />
        </label>
      </div>
      <div className="input-group">
        <label>
          Expected Return:
          <input
            type="number"
            required
            onChange={(event) => handleChange(event, 'expectedReturn')}
          />
        </label>
        <label>
          Duration:
          <input
            type="number"
            required
            onChange={(event) => handleChange(event, 'duration')}
          />
        </label>
      </div>
    </div>
  );
}
