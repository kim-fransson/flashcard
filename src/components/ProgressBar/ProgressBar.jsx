import React from "react";

import { KNOWN_COUNT_MAX } from "@/constants";

import {
  base,
  barWrapper,
  bar,
  value as valueStyles,
} from "./ProgressBar.module.css";
import { normalize } from "@/utils";

function ProgressBar({ value }) {
  return (
    <div
      role='progressbar'
      aria-valuenow={value}
      aria-valuemin={0}
      aria-valuemax={KNOWN_COUNT_MAX}
      className={base}
    >
      <div className={barWrapper}>
        <div
          className={bar}
          style={{
            "--width":
              normalize(value, 0, KNOWN_COUNT_MAX, 0, 100) + "%",
          }}
        />
      </div>
      <span className={valueStyles}>
        {value} / {KNOWN_COUNT_MAX}
      </span>
    </div>
  );
}

export default ProgressBar;
