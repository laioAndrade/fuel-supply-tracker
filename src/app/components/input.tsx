import styles from "./components.module.css";
import { UseFormRegister } from "react-hook-form";

interface IFormValues {
  Driver: string;
  FuelType: string;
  FuelLevel: number;
}

type InputProps = {
  label: string;
  register?: UseFormRegister<IFormValues>;
  required?: boolean;
  isDataList?: boolean;
  selectOptions?: [];
};

export default function Input({
  label,
  isDataList,
  selectOptions,
  register,
  required,
}: InputProps) {
  return (
    <div className={styles.inputBox}>
      <label className={styles.label}>{label}</label>
      {isDataList ? (
        <>
          <select
            {...register(label, { required })}
            className={styles.input}
            id={label}
          >
            {selectOptions?.map((option) => (
              <option value={option.id} key={option}>
                {option.name}
              </option>
            ))}
          </select>
        </>
      ) : (
        <input {...register(label, { required })} className={styles.input} />
      )}
    </div>
  );
}
