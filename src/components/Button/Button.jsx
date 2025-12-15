import React from "react";

import styles from "./Button.module.css";
import clsx from "clsx";

function Button({ variant = "primary", children, ...delegated }) {
  return (
    <button
      {...delegated}
      className={clsx(styles.base, styles[variant])}
    >
      {children}
    </button>
  );
}

export default Button;
