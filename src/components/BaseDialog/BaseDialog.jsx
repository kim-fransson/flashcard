"use client";

import React from "react";
import { X } from "lucide-react";
import {
  Button as RACButton,
  Modal as RACModal,
  Dialog as RACDialog,
  ModalOverlay as RACModalOverlay,
  Heading as RACHeading,
} from "react-aria-components";

import VisuallyHidden from "../VisuallyHidden";

import styles from "./BaseDialog.module.css";

function BaseDialog({ children, heading, footer, ...delegated }) {
  return (
    <RACModalOverlay className={styles.overlay} {...delegated}>
      <RACModal className={styles.modal}>
        <RACDialog className={styles.dialog}>
          <div className={styles.content}>
            <RACHeading className={styles.heading} slot='title'>
              {heading}
            </RACHeading>
            {children}
          </div>
          <div className={styles.footer}>{footer}</div>
          <RACButton className={styles.closeBtn} slot='close'>
            <VisuallyHidden>Close Modal</VisuallyHidden>
            <X />
          </RACButton>
        </RACDialog>
      </RACModal>
    </RACModalOverlay>
  );
}

export default BaseDialog;
