"use client";

import React from "react";
import { PlusCircle } from "lucide-react";
import Form from "next/form";
import { useSpinDelay } from "spin-delay";

import createFlashcard from "@/actions/create-flashcard";

import Button from "../Button";
import TextField from "../TextField";

import styles from "./CreateFlashcardForm.module.css";
import { toast } from "@/helpers";

const defaultValues = {
  question: "",
  answer: "",
  category: "",
};

function CreateFlashcardForm() {
  const [state, formAction, pending] = React.useActionState(
    createFlashcard,
    { success: false }
  );

  const [values, setValues] = React.useState(defaultValues);
  const [errors, setErrors] = React.useState({});

  const showLoading = useSpinDelay(pending, {
    delay: 500,
    minDuration: 200,
  });

  React.useEffect(() => {
    if (state.success) {
      toast("Card successfully created.");
      setValues(defaultValues);
    }
  }, [state]);

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
    <Form className={styles.base} onSubmit={handleSubmit}>
      <TextField
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
