import { useState } from "react";

export default function UserInput({ label, handleOnChange, maxLength = 17 }) {
  const [value, setValue] = useState(0)

  function handleNumber(e) {
    let rawValue = e.target.value;
    rawValue = rawValue === '' ? '0' : rawValue

    const formatted = format(rawValue)

    setValue(formatted)

    const deFormatted = deFormat(formatted)

    handleOnChange(parseInt(deFormatted))
  }

  function format(input) {
    return parseInt(deFormat(input)).toLocaleString()
  }

  function deFormat(input) {
    return input.replaceAll(',', '')
  }

  return (
    <div id="user-input">
      <label>{label}</label>
      <input
        type="text"
        value={value}
        maxLength={maxLength}
        onChange={handleNumber}
      />
    </div>
  );
}
