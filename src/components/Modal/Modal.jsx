"use client";

import React from "react";
import { X } from "lucide-react";
import {
  Button as RACButton,
  Modal as RACModal,
  Dialog,
  ModalOverlay,
} from "react-aria-components";

import VisuallyHidden from "../VisuallyHidden";

import { overlay, modal, dialog, closeBtn } from "./Modal.module.css";

function Modal({ isOpen, onOpenChange, children }) {
  return (
    <ModalOverlay
      isDismissable
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className={overlay}
    >
      <RACModal className={modal}>
        <Dialog className={dialog}>
          {children}
          <RACButton className={closeBtn} slot='close'>
            <VisuallyHidden>Close Modal</VisuallyHidden>
            <X />
          </RACButton>
        </Dialog>
      </RACModal>
    </ModalOverlay>
  );
}

export default Modal;
