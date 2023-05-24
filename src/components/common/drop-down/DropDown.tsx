interface props {
  name: string;
  label: string;
  id: string;
  list: string[];
  onChange: object;
}
const DropDown = ({ name, id, list, label, onChange }: props) => {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <select name={name} id={id} className="form-select" {...onChange}>
        {list.map((value, index) => (
          <option key={index} value={value}>
            {value}
          </option>
        ))}
      </select>
    </>
  );
};

export default DropDown;
