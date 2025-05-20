import clsx from "clsx";
import styles from "./Button.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
}

const Button = (props: ButtonProps) => {
  const { label, className, ...otherProps } = props;

  return (
    <button
      className={clsx(styles.root, className && className)}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default Button;
