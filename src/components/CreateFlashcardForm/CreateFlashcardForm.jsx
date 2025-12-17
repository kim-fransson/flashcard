"use client";

import React from "react";
import { PlusCircle } from "lucide-react";
import Form from "next/form";
import { useSpinDelay } from "spin-delay";

import createFlashcard from "@/actions/create-flashcard";

import Button from "../Button";
import TextField from "../TextField";

import styles from "./CreateFlashcardForm.module.css";

function CreateFlashcardForm() {
  const [_state, formAction, pending] = React.useActionState(
    createFlashcard,
    { success: false }
  );

  const showLoading = useSpinDelay(pending, {
    delay: 500,
    minDuration: 200,
  });

  return (
    <Form className={styles.base} action={formAction}>
      <TextField
        label='Question'
        name='question'
        placeholder='e.g., What is the capital of France?'
        required={true}
      />

      <TextField
        label='Answer'
        name='answer'
        placeholder='e.g., Paris'
        required={true}
        multiline={true}
      />

      <TextField
        label='Category'
        name='category'
        placeholder='e.g., Geography'
        required={true}
      />

      <div>
        <Button type='submit'>
          <PlusCircle size={20} />
          {showLoading ? "Creating Card..." : "Create Card"}
        </Button>
      </div>
    </Form>
  );
}

export default CreateFlashcardForm;
