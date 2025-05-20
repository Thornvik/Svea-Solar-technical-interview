import React, { useId } from "react";
import styles from "./Select.module.css";
import clsx from "clsx";
import Typography from "../Typography";

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  className?: string;
  children?: React.ReactNode;
  label?: string;
  hintText?: string;
  supportingText?: string;
}

const Select = (props: SelectProps) => {
  const {
    id,
    className,
    children,
    label,
    hintText,
    supportingText,
    ...otherProps
  } = props;

  const hintId = useId()
  const supportId = useId()

  return (
    <div className={styles.root}>
      {label && (
        <label className={styles.label} htmlFor={id}>
          {label}
        </label>
      )}

      {hintText && (
        <Typography id={hintId} variant="label1">
          {hintText}
        </Typography>
      )}

      <div className={styles["select-wrapper"]}>
        <select
          id={id}
          className={clsx(styles.select, className && className)}
          {...otherProps}
        >
          {children}
        </select>

        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.4929 12C28.4929 12.25 28.403 12.5 28.213 12.69L16.7166 24.69C16.5266 24.885 16.2667 25 15.9968 25C15.7269 25 15.4619 24.89 15.277 24.69L3.78054 12.69C3.40065 12.29 3.41065 11.66 3.81053 11.275C4.2104 10.895 4.84021 10.905 5.22509 11.305L16.0018 22.55L26.7785 11.305C27.1583 10.905 27.7931 10.895 28.193 11.275C28.398 11.47 28.5029 11.735 28.5029 11.995L28.4929 12Z"
            fill="black"
          />
        </svg>
      </div>

      {supportingText && (
        <Typography id={supportId} variant="label1">
          {supportingText}
        </Typography>
      )}
    </div>
  );
};

export default Select;
