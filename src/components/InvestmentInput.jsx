import { Fragment } from "react";
import UserInput from "./UserInput";

export default function InvestmentInput({
  setInitialInvestment,
  setAnnualInvestment,
  setExpectedReturn,
  setDuration,
}) {
  return (
    <Fragment>
      <div className="input-group">
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
        />
        <UserInput label="PERIOD(YEAR)" handleOnChange={setDuration} />
      </div>
    </Fragment>
  );
}
