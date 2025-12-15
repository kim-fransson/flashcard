import React from "react";

import { base } from "./Tag.module.css";

function Tag({ color = "white", children }) {
  return (
    <span
      className={base}
      style={{
        "--background":
          color === "teal" ? "var(--teal-400)" : "var(--neutral-0)",
      }}
    >
      {children}
    </span>
  );
}

export default Tag;
