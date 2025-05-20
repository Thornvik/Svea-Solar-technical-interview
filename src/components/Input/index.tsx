import React, { useId } from "react";
import clsx from "clsx";
import styles from "./Input.module.css";
import Typography from "../Typography";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label: string;
  hintText?: string;
  supportingText?: string;
  status?: "success" | "error";
}

const Input = (props: InputProps) => {
  const {
    id,
    className,
    label,
    hintText,
    supportingText,
    type,
    status,
    ...otherProps
  } = props;

  const hintId = useId();
  const supportId = useId();

  return (
    <div className={clsx(className && className, styles.root)}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>

      {hintText && (
        <Typography id={hintId} variant="label1">
          {hintText}
        </Typography>
      )}
      
      <div className={styles["input-wrapper"]}>
        <input
          id={id}
          aria-describedby={`${hintId} ${supportId}`}
          className={clsx(
            styles.input,
            status === "error" && styles["input-error"]
          )}
          {...otherProps}
          type={type || "text"}
        />
      </div>

      {supportingText && (
        <Typography id={supportId} variant="label1">
          {supportingText}
        </Typography>
      )}
    </div>
  );
};

export default Input;
