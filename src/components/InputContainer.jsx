import UserInput from "./UserInput";

export default function InputContainer({
  setInitialInvestment,
  setAnnualInvestment,
  setExpectedReturn,
  setDuration,
}) {
  return (
    <section id="user-input">
      <div id="input-group">
        <UserInput
          label="PRINCIPLE AMOUNT"
          handleOnChange={setInitialInvestment}
        />
        <UserInput
          label="YEARLY DEPOSIT"
          handleOnChange={setAnnualInvestment}
        />
        <UserInput
          label="ANNUAL EXPECTED RETURN(%)"
          handleOnChange={setExpectedReturn}
          maxLength={5}
        />
        <UserInput
          label="PERIOD(YEAR)"
          handleOnChange={setDuration}
          maxLength={2}
        />
      </div>
    </section>
  );
}
