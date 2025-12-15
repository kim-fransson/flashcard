import React from "react";
import { PlusCircle } from "lucide-react";
import Form from "next/form";
import createFlashcard from "@/actions/create-flashcard";

import Button from "../Button";
import TextField from "../TextField";

import { base } from "./CreateFlashcardForm.module.css";

function CreateFlashcardForm() {
  return (
    <Form className={base} action={createFlashcard}>
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
          <PlusCircle />
          Create Card
        </Button>
      </div>
    </Form>
  );
}

export default CreateFlashcardForm;
