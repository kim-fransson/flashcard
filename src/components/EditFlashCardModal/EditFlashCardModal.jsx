"use client";

import React from "react";
import Form from "next/form";

import Modal from "../Modal";
import Button from "../Button";

import TextField from "../TextField";

import {
  contentWrapper,
  heading,
  updateForm,
  submitBtn,
} from "./EditFlashcardModal.module.css";
import updateFlashcard from "@/actions/update-flashcard";

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
    <Modal onOpenChange={onOpenChange} {...delegated}>
      <div className={contentWrapper}>
        <h2 className={heading}>Edit your card</h2>

        <Form className={updateForm} action={formAction}>
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

          <div className={submitBtn}>
            <Button type='submit'>Update Card</Button>
          </div>
        </Form>
      </div>
    </Modal>
  );
}

export default EditFlashCardModal;
