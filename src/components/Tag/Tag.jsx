import React from "react";

import { base } from "./Tag.module.css";

function Tag({ children }) {
  return <span className={base}>{children}</span>;
}

export default Tag;
