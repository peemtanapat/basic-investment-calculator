export default function InfoSection() {
  return (
    <div className="input-group">
      <div id="user-input">
        <label>INITIAL INVESTMENT</label>
        <input type="number" />
      </div>
      <div id="user-input">
        <label>ANNUAL INVESTMENT</label>
        <input type="number" />
      </div>
      <div id="user-input">
        <label>EXPECTED RETURN</label>
        <input type="number" />
      </div>
      <div id="user-input">
        <label>DURATION</label>
        <input type="number" />
      </div>
    </div>
  );
}
