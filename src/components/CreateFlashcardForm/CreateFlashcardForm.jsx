import React from "react";
import { PlusCircle } from "lucide-react";
import Form from "next/form";
import createFlashcard from "@/actions/create-flashcard";

function CreateFlashcardForm() {
  return (
    <Form action={createFlashcard}>
      <div>
        <label htmlFor='question'>Question</label>
        <input
          id='question'
          name='question'
          placeholder='e.g., What is the capital of France?'
          required={true}
        />
      </div>

      <div>
        <label htmlFor='answer'>Answer</label>
        <textarea
          id='answer'
          name='answer'
          placeholder='e.g., Paris'
          required={true}
        />
      </div>

      <div>
        <label htmlFor='category'>Category</label>
        <input
          id='category'
          name='category'
          placeholder='e.g., Geography'
          required={true}
        />
      </div>

      <button type='submit'>
        <PlusCircle />
        Create Card
      </button>
    </Form>
  );
}

export default CreateFlashcardForm;
