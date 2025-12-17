import React from "react";

import deleteFlashcard from "@/actions/delete-flashcard";

import Button from "../Button";
import BaseDialog from "../BaseDialog";

import styles from "./DeleteFlashcardDialog.module.css";

function DeleteFlashCardModal({
  flashcardId,
  onOpenChange,
  ...delegated
}) {
  return (
    <BaseDialog
      heading='Delete this card?'
      footer={
        <div className={styles.buttonGroup}>
          <Button
            onClick={() => onOpenChange(false)}
            variant='border'
          >
            Cancel
          </Button>
          <Button onClick={() => deleteFlashcard(flashcardId)}>
            Delete Card
          </Button>
        </div>
      }
      onOpenChange={onOpenChange}
      {...delegated}
    >
      <p>This action can’t be undone.</p>
    </BaseDialog>
  );
}

export default DeleteFlashCardModal;
