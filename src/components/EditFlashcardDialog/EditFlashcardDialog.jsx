"use client";

import React from "react";
import Form from "next/form";

import updateFlashcard from "@/actions/update-flashcard";

import Button from "../Button";
import TextField from "../TextField";
import BaseDialog from "../BaseDialog";

import styles from "./EditFlashcardDialog.module.css";
import { useSpinDelay } from "spin-delay";
import { toast } from "@/helpers";

function EditFlashcardDialog({
  flashcard,
  onOpenChange,
  ...delegated
}) {
  const { id: flashcardId, question, answer, category } = flashcard;

  const [state, formAction, pending] = React.useActionState(
    updateFlashcard.bind(null, flashcardId),
    { success: false }
  );

  const [values, setValues] = React.useState({
    question,
    answer,
    category: category.name,
  });
  const [errors, setErrors] = React.useState({});

  const showLoading = useSpinDelay(pending, {
    delay: 500,
    minDuration: 200,
  });

  React.useEffect(() => {
    if (state.success) {
      toast("Card updated successfully.");
      onOpenChange(false);
    }
  }, [state, onOpenChange]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const newErrors = {};

    const question =
      formData.get("question")?.toString().trim() || "";
    const answer = formData.get("answer")?.toString().trim() || "";
    const category =
      formData.get("category")?.toString().trim() || "";

    if (!question) {
      newErrors.question = "Please enter a question";
    }
    if (!answer) {
      newErrors.answer = "Please enter an answer";
    }
    if (!category) {
      newErrors.category = "Please enter a category";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    React.startTransition(() => {
      formAction(formData);
    });
  };

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
        onSubmit={handleSubmit}
      >
        <TextField
          autoFocus
          label='Question'
          name='question'
          placeholder='e.g., What is the capital of France?'
          value={values.question}
          onChange={handleChange}
          error={errors.question}
        />

        <TextField
          label='Answer'
          name='answer'
          placeholder='e.g., Paris'
          multiline={true}
          value={values.answer}
          onChange={handleChange}
          error={errors.answer}
        />

        <TextField
          label='Category'
          name='category'
          placeholder='e.g., Geography'
          value={values.category}
          onChange={handleChange}
          error={errors.category}
        />
      </Form>
    </BaseDialog>
  );
}

export default EditFlashcardDialog;
