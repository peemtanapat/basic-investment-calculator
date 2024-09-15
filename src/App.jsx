import { Fragment, useState } from "react";
import InputContainer from "./components/InputContainer";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";
import { calculateInvestmentResults } from "./util/investment";

function App() {
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  const annualData = calculateInvestmentResults({
    initialInvestment,
    annualInvestment,
    expectedReturn,
    duration,
  });

  return (
    <Fragment>
      <Header />
      <InputContainer
        setInitialInvestment={setInitialInvestment}
        setAnnualInvestment={setAnnualInvestment}
        setExpectedReturn={setExpectedReturn}
        setDuration={setDuration}
      />
      <ResultTable annualData={annualData} />
    </Fragment>
  );
}

export default App;
