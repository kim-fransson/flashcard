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
      className={clsx(styles.base, disabled && styles.disabled)}
    >
      {variant !== "border" && <span className={styles.back} />}
      <span className={clsx(styles.front, styles[variant])}>
        {children}
      </span>
    </button>
  );
}

export default Button;
