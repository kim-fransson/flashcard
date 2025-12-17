"use client";

import { X } from "lucide-react";
import styles from "./Toast.module.css";
import { toast as sonnerToast } from "sonner";

function Toast({ message, id }) {
  return (
    <div className={styles.base}>
      <p className={styles.message}>{message}</p>
      <button
        className={styles.close}
        onClick={() => sonnerToast.dismiss(id)}
      >
        <X size={20} />
      </button>
    </div>
  );
}

export default Toast;
