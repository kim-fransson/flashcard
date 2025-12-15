import React from "react";

import { base } from "./MaxWidthWrapper.module.css";

function MaxWidthWrapper({ children }) {
  return <div className={base}>{children}</div>;
}

export default MaxWidthWrapper;
