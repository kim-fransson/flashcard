"use client";

import React from "react";
import Form from "next/form";

import updateFlashcard from "@/actions/update-flashcard";

import Button from "../Button";
import TextField from "../TextField";
import BaseDialog from "../BaseDialog";

import styles from "./EditFlashcardDialog.module.css";
import { useSpinDelay } from "spin-delay";

function EditFlashCardModal({
  flashcardId,
  question,
  answer,
  category,
  onOpenChange,
  ...delegated
}) {
  const [state, formAction, pending] = React.useActionState(
    updateFlashcard.bind(null, flashcardId),
    { success: false }
  );

  const showLoading = useSpinDelay(pending, {
    delay: 500,
    minDuration: 200,
  });

  React.useEffect(() => {
    if (state.success) {
      onOpenChange(false);
    }
  }, [state, onOpenChange]);

  return (
    <BaseDialog
      heading='Edit your card'
      footer={
        <>
          <Button
            disabled={pending}
            onClick={() => onOpenChange(false)}
            variant='border'
          >
            Cancel
          </Button>
          <Button
            form='edit-flashcard-form'
            disabled={pending}
            type='submit'
          >
            {showLoading ? "Updating Card..." : "Update Card"}
          </Button>
        </>
      }
      onOpenChange={onOpenChange}
      {...delegated}
    >
      <Form
        id='edit-flashcard-form'
        className={styles.form}
        action={formAction}
      >
        <TextField
          autoFocus
          defaultValue={question}
          label='Question'
          name='question'
          placeholder='e.g., What is the capital of France?'
          required={true}
        />

        <TextField
          defaultValue={answer}
          label='Answer'
          name='answer'
          placeholder='e.g., Paris'
          required={true}
          multiline={true}
        />

        <TextField
          defaultValue={category}
          label='Category'
          name='category'
          placeholder='e.g., Geography'
          required={true}
        />
      </Form>
    </BaseDialog>
  );
}

export default EditFlashCardModal;
