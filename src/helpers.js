import React from "react";
import { toast as sonnerToast } from "sonner";
import Toast from "./components/Toast";

/* I don't like it appearing directly */
const DELAY_IN_MS = 200;

export function toast(message) {
  setTimeout(() => {
    sonnerToast.custom((id) => <Toast id={id} message={message} />);
  }, DELAY_IN_MS);
}
