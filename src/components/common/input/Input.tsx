interface props {
  id: string;
  label: string;
  type?: string;
  name?: string;
  placeholder?: string;
  onChange?: object;
}

const Input = ({
  name,
  id,
  label,
  placeholder,
  type = "text",
  onChange,
}: props) => {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        className="form-control"
        {...onChange}
      />
    </>
  );
};

export default Input;
