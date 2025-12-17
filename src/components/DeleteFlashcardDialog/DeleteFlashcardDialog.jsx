import React from "react";

import deleteFlashcard from "@/actions/delete-flashcard";

import Button from "../Button";
import BaseDialog from "../BaseDialog";

function DeleteFlashCardModal({
  flashcardId,
  onOpenChange,
  ...delegated
}) {
  return (
    <BaseDialog
      heading='Delete this card?'
      footer={
        <Button onClick={() => deleteFlashcard(flashcardId)}>
          Delete Card
        </Button>
      }
      onOpenChange={onOpenChange}
      {...delegated}
    >
      <p>This action can’t be undone.</p>
    </BaseDialog>
  );
}

export default DeleteFlashCardModal;
