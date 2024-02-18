import { useState } from 'react';

import InvestmentInput from './components/InvestmentInput';
import InvestmentResult from './components/InvestmentResult';

function App() {
  const [values, setValues] = useState({
    initialInvestment: 0,
    annualInvestment: 0,
    expectedReturn: 0,
    duration: 0,
  });

  return (
    <>
      <InvestmentInput setValues={setValues} />
      <InvestmentResult values={values} />
    </>
  );
}

export default App;
