import React from "react";

import { base } from "./Button.module.css";

function Button({ children, ...delegated }) {
  return (
    <button {...delegated} className={base}>
      {children}
    </button>
  );
}

export default Button;
