"use client";

import React from "react";
import Form from "next/form";

import updateFlashcard from "@/actions/update-flashcard";

import Button from "../Button";
import TextField from "../TextField";
import BaseDialog from "../BaseDialog";

import styles from "./EditFlashcardDialog.module.css";

function EditFlashCardModal({
  flashcardId,
  question,
  answer,
  category,
  onOpenChange,
  ...delegated
}) {
  const [state, formAction, _pending] = React.useActionState(
    updateFlashcard.bind(null, flashcardId),
    { success: false }
  );

  React.useEffect(() => {
    if (state.success) {
      onOpenChange(false);
    }
  }, [state, onOpenChange]);

  return (
    <BaseDialog
      heading='Edit your card'
      footer={<Button type='submit'>Update Card</Button>}
      onOpenChange={onOpenChange}
      {...delegated}
    >
      <Form className={styles.form} action={formAction}>
        <TextField
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
