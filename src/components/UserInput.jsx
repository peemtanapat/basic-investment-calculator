export default function UserInput({ label, handleOnChange, defaultValue = 0 }) {
  return (
    <div id="user-input">
      <label>{label}</label>
      <input
        type="number"
        min={0}
        defaultValue={defaultValue}
        onChange={(e) => handleOnChange(parseInt(e.target.value))}
      />
    </div>
  );
}
