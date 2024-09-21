import { Fragment, useState } from "react";
import InputContainer from "./components/InputContainer";
import Header from "./components/Header";
import ResultTable from "./components/ResultTable";

function App() {
  // •	Option 1 (Single State Object): Best for handling a larger number of related fields (5, 6, so on),
  // making state management more scalable and maintainable in the long run. It’s suitable when you have a complex
  // form and the fields are conceptually related.
  // •	Option 2 (Multiple useState Hooks): Best for handling a small number of fields (2 to 5 fields),
  // providing simpler state updates and potentially better performance in scenarios where each field can be updated independently.
  const [initialInvestment, setInitialInvestment] = useState(0);
  const [annualInvestment, setAnnualInvestment] = useState(0);
  const [expectedReturn, setExpectedReturn] = useState(0);
  const [duration, setDuration] = useState(0);

  return (
    <Fragment>
      <Header />
      <InputContainer
        setInitialInvestment={setInitialInvestment}
        setAnnualInvestment={setAnnualInvestment}
        setExpectedReturn={setExpectedReturn}
        setDuration={setDuration}
      />
      <ResultTable
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
      />
    </Fragment>
  );
}

export default App;
