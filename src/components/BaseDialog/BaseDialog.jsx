"use client";

import React from "react";
import {
  Modal as RACModal,
  Dialog as RACDialog,
  ModalOverlay as RACModalOverlay,
  Heading as RACHeading,
} from "react-aria-components";

import styles from "./BaseDialog.module.css";
import Button from "../Button";

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
          <div className={styles.footer}>
            <Button
              slot='close'
              onClick={() => delegated.onOpenChange(false)}
              variant='border'
            >
              Cancel
            </Button>
            {footer}
          </div>
        </RACDialog>
      </RACModal>
    </RACModalOverlay>
  );
}

export default BaseDialog;
