import React from "react";
import { DynamicIcon } from "lucide-react/dynamic";
import VisuallyHidden from "../VisuallyHidden";

import styles from "./IconButton.module.css";

const IconButton = React.forwardRef(
  ({ icon, label, ...delegated }, forwardedRef) => {
    return (
      <button
        className={styles.base}
        {...delegated}
        ref={forwardedRef}
      >
        <span className={styles.back} />
        <span className={styles.front}>
          <VisuallyHidden>{label}</VisuallyHidden>
          <DynamicIcon name={icon} size={20} />
        </span>
      </button>
    );
  }
);

IconButton.displayName = "IconButton";

export default IconButton;
