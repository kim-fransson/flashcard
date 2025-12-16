"use client";

import React from "react";
import {
  Button as RACButton,
  Modal as RACModal,
  Dialog,
  Heading,
  ModalOverlay,
} from "react-aria-components";

import {
  overlay,
  modal,
  dialog,
  heading as headingStyles,
  closeBtn,
} from "./Modal.module.css";
import VisuallyHidden from "../VisuallyHidden";
import { Cross, X } from "lucide-react";

function Modal({ heading, isOpen, onOpenChange, children }) {
  return (
    <ModalOverlay
      isDismissable
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className={overlay}
    >
      <RACModal className={modal}>
        <Dialog className={dialog}>
          <Heading className={headingStyles} slot='title'>
            {heading}
          </Heading>
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
