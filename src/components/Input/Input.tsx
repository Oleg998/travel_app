import styles from "./input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  type?: string;
  "data-test-id"?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  hiddenLabel?: boolean;
}

const Input: React.FC<InputProps> = ({
  label,
  name,
  type = "text",
  "data-test-id": dataTestId,
  onChange,
  required,
  value,
  placeholder,
  className,
  hiddenLabel,
  min, max ,
  minLength,
  maxLength
}) => {
  return (
    <label className={`${className ? styles[className] : ""} ${styles.input}`}>
      <span
        className={`${styles.input__heading} ${
          hiddenLabel ? "visually-hidden" : ""
        }`}
      >
        {label}
      </span>
      <input
        data-test-id={dataTestId}
        name={name}
        type={type}
        onChange={onChange}
        required={required}
        value={value}
        placeholder={placeholder}
        min={min}
        max={max}
        minLength={minLength}
        maxLength={maxLength}      />
    </label>
  );
};

export { Input };
