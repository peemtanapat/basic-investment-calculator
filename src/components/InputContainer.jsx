import UserInput from "./UserInput";

export default function InputContainer({
  setInitialInvestment,
  setAnnualInvestment,
  setExpectedReturn,
  setDuration,
}) {
  return (
    <div id="input-group">
      <UserInput
        label="PRINCIPLE AMOUNT"
        handleOnChange={setInitialInvestment}
      />
      <UserInput label="YEARLY DEPOSIT" handleOnChange={setAnnualInvestment} />
      <UserInput
        label="ANNUAL EXPECTED RETURN(%)"
        handleOnChange={setExpectedReturn}
      />
      <UserInput label="PERIOD(YEAR)" handleOnChange={setDuration} />
    </div>
  );
}
