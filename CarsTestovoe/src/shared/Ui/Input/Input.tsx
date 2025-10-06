import styles from "./Input.module.css";

import type { ChangeEvent } from "react";

interface IInput {
  placeholder: "name" | "model" | "year" | "color" | "price";
  OnChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  type?: "text" | "number";
}

function Input({ placeholder, OnChange, value, type }: IInput) {
  return (
    <input
      onChange={OnChange}
      value={value}
      className={styles.input}
      placeholder={placeholder}
      type={type}
    />
  );
}

export default Input;
