"use client";

import React from "react";

import deleteFlashcard from "@/actions/delete-flashcard";

import Button from "../Button";
import BaseDialog from "../BaseDialog";
import { useSpinDelay } from "spin-delay";
import { toast } from "@/helpers";

function DeleteFlashCardDialog({
  flashcard,
  onOpenChange,
  ...delegated
}) {
  const [state, action, pending] = React.useActionState(
    () => deleteFlashcard(flashcard.id),
    { success: false }
  );

  const showLoading = useSpinDelay(pending, {
    delay: 500,
    minDuration: 200,
  });

  React.useEffect(() => {
    if (state.success) {
      toast("Card deleted.");
      onOpenChange(false);
    }
  }, [state, onOpenChange]);

  return (
    <BaseDialog
      role='alertdialog'
      heading='Delete this card?'
      footer={
        <>
          <Button
            disabled={pending}
            autoFocus
            onClick={() => onOpenChange(false)}
            variant='border'
          >
            Cancel
          </Button>
          <Button
            disabled={pending}
            onClick={() => React.startTransition(action)}
          >
            {showLoading ? "Deleting Card..." : "Delete Card"}
          </Button>
        </>
      }
      onOpenChange={onOpenChange}
      {...delegated}
    >
      <p>This action can’t be undone.</p>
    </BaseDialog>
  );
}

export default DeleteFlashCardDialog;
