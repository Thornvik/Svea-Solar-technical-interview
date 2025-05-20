import React, { ReactNode, type JSX } from "react";
import clsx from "clsx";
import classes from "./Typography.module.css";
import { Variant } from "@/types/typography";

const defaultVariantMapping = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  body1: "p",
  body2: "p",
  label1: "span",
  default: "span",
};

interface TypographyProps {
  id?: string;
  className?: string;
  children: ReactNode;
  variant?: Variant;
}

const Typography = (props: TypographyProps) => {
  const { id, className, children, variant = "default" } = props;
  const Component =
    (defaultVariantMapping[variant!] as keyof JSX.IntrinsicElements) || "span";

  return (
    <Component
      id={id}
      className={clsx(
        classes.typography,
        variant && classes[variant],
        className && className
      )}
    >
      {children}
    </Component>
  );
};

export default Typography;
