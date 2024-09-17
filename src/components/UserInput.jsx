import { useState } from "react";

export default function UserInput({ label, handleOnChange }) {
  const [value, setValue] = useState(0)

  function handleNumber(e) {
    const rawValue = e.target.value;
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
        onChange={handleNumber}
      />
    </div>
  );
}
