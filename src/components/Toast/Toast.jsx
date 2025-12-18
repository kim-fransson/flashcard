"use client";

import styles from "./Toast.module.css";
import { toast as sonnerToast } from "sonner";
import IconButton from "../IconButton";

function Toast({ message, id }) {
  return (
    <div className={styles.base}>
      <p className={styles.message}>{message}</p>
      <IconButton
        onClick={() => sonnerToast.dismiss(id)}
        icon='x'
        label='Dismiss message'
      />
    </div>
  );
}

export default Toast;
