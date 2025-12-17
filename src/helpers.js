import React from "react";
import { toast as sonnerToast } from "sonner";
import Toast from "./components/Toast";

export function toast(message) {
  return sonnerToast.custom((id) => (
    <Toast id={id} message={message} />
  ));
}
