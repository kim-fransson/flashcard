import React from "react";

import styles from "./TextField.module.css";
import clsx from "clsx";
import { CircleAlert } from "lucide-react";

function TextField({
  label,
  value,
  placeholder,
  onChange,
  multiline = false,
  error = "",
  ...delegated
}) {
  const id = React.useId();
  const componentId = `text-field-${id}`;

  const Template = multiline ? "textarea" : "input";

  return (
    <div className={styles.base}>
      <label className={styles.label} htmlFor={componentId}>
        {label}
      </label>

      <Template
        id={componentId}
        className={clsx(
          styles.input,
          multiline && styles.multiline,
          error && styles.error
        )}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...delegated}
      />

      {error && (
        <div className={styles.errorText} aria-live='polite'>
          <CircleAlert size={16} />
          {error}
        </div>
      )}
    </div>
  );
}

export default TextField;
