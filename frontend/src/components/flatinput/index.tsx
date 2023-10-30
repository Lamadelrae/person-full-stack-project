import React from "react";
import styles from "./flatinput.module.css";

interface IFlatInputProps {
  type: string;
  label: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FlatInput: React.FC<IFlatInputProps> = ({
  type,
  label,
  value,
  onChange,
}) => {
  return (
    <div className={styles['flat-input']}>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </div>
  );
};

export default FlatInput;
