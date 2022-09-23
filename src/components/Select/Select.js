export default function Select({ options, changeHandler }) {
  return (
    
    <select onChange={(e) => changeHandler(e.target.value)}>
      <option value="">all</option>
      {options.map((opt) => (
        <option key={opt} value={opt}>
          {opt}
        </option>
      ))}
    </select>
  );
}