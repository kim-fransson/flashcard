import React from "react";
import Modal from "../Modal";
import Button from "../Button";

import {
  contentWrapper,
  textContent,
  buttonGroup,
} from "./DeleteFlashcardModal.module.css";
import deleteFlashcard from "@/actions/delete-flashcard";

function DeleteFlashCardModal({
  flashcardId,
  onOpenChange,
  ...delegated
}) {
  return (
    <Modal onOpenChange={onOpenChange} {...delegated}>
      <div className={contentWrapper}>
        <div className={textContent}>
          <h2>Delete this card?</h2>
          <p>This action can’t be undone.</p>
        </div>
        <div className={buttonGroup}>
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
      </div>
    </Modal>
  );
}

export default DeleteFlashCardModal;
