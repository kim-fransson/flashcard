import React from "react";

import styles from "./Checkbox.module.css";
import clsx from "clsx";
import { Check } from "lucide-react";

function Checkbox({ checked, onChange, label, ...delegated }) {
  const id = React.useId();
  const componentId = `checkbox-${id}`;

  return (
    <div className={styles.base}>
      <div className={styles.checkboxWrapper}>
        <input
          className={styles.nativeCheckbox}
          type='checkbox'
          id={componentId}
          value={checked}
          onChange={onChange}
          {...delegated}
        />
        <div
          className={clsx(styles.front, checked && styles.checked)}
        >
          {checked && (
            <span className={styles.iconWrapper}>
              <Check strokeWidth={2.5} />
            </span>
          )}
        </div>
      </div>
      <label htmlFor={componentId}>{label}</label>
    </div>
  );
}

export default Checkbox;
