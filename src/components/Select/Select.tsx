import styles from "./select.module.css";

interface Option {
  label: string;
  value: string;
}

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  "data-test-id"?: string;
}

const Select: React.FC<SelectProps> = ({
  label,
  options,
  name,
  value,
  onChange,
  "data-test-id": dataTestId,
}) => {
  return (
    <label className={styles.select}>
      <span className={styles["visually-hidden"]}>{label}</span>
      <select
        name={name}
        value={value}
        onChange={onChange}
        data-test-id={dataTestId}
       
      >
        {options.map(({ label, value }) => (
          <option
            key={value}
            value={value}
          >
            {label}
          </option>
        ))}
      </select>
    </label>
  );
};

export  {Select};
