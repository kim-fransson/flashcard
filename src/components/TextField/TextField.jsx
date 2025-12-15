"use client";

import React from "react";

import {
  base,
  label as labelStyles,
  input as inputStyles,
  multiline as multilineStyles,
} from "./TextField.module.css";
import clsx from "clsx";

function TextField({
  label,
  value,
  placeholder,
  onChange,
  multiline = false,
  ...delegated
}) {
  const id = React.useId();
  const componentId = `text-field-${id}`;

  const Template = multiline ? "textarea" : "input";

  return (
    <div className={base}>
      <label className={labelStyles} htmlFor={componentId}>
        {label}
      </label>

      <Template
        id={componentId}
        className={clsx(inputStyles, multiline && multilineStyles)}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        {...delegated}
      />
    </div>
  );
}

export default TextField;
