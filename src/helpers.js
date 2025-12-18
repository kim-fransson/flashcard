import React from "react";
import { toast as sonnerToast } from "sonner";
import Toast from "./components/Toast";

/* I don't like it appearing directly */
const TOAST_DELAY_IN_MS = 200;

export function toast(message) {
  setTimeout(() => {
    sonnerToast.custom((id) => <Toast id={id} message={message} />);
  }, TOAST_DELAY_IN_MS);
}

export const createQueryString = (current, name, value) => {
  const params = new URLSearchParams(current);
  params.set(name, value);
  return params.toString();
};
