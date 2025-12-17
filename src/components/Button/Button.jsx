import React from "react";

import styles from "./Button.module.css";
import clsx from "clsx";

function Button({
  variant = "primary",
  children,
  disabled,
  ...delegated
}) {
  return (
    <button
      {...delegated}
      className={clsx(
        styles.base,
        styles[variant],
        disabled && styles.disabled
      )}
    >
      {children}
    </button>
  );
}

export default Button;
