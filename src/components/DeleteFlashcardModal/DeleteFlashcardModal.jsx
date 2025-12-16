import React from "react";
import Modal from "../Modal";
import Button from "../Button";

import deleteFlashcard from "@/actions/delete-flashcard";

import {
  contentWrapper,
  textContent,
  heading,
  buttonGroup,
} from "./DeleteFlashcardModal.module.css";

function DeleteFlashCardModal({
  flashcardId,
  onOpenChange,
  ...delegated
}) {
  return (
    <Modal onOpenChange={onOpenChange} {...delegated}>
      <div className={contentWrapper}>
        <div className={textContent}>
          <h2 className={heading}>Delete this card?</h2>
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
