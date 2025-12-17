"use client";

import React from "react";

import { base } from "./FlashcardList.module.css";
import Flashcard from "../Flashcard";
import DeleteFlashcardDialog from "../DeleteFlashcardDialog";
import EditFlashcardDialog from "../EditFlashcardDialog";

function FlashcardList({ flashcards }) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] =
    React.useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = React.useState(false);
  const [selectedFlashcard, setFlashcard] = React.useState(null);

  function handleDelete(flashcard) {
    setFlashcard(flashcard);
    setIsDeleteModalOpen(true);
  }

  function handleEdit(flashcard) {
    setFlashcard(flashcard);
    setIsEditModalOpen(true);
  }

  return (
    <>
      <div className={base}>
        {flashcards.map((flashcard) => (
          <Flashcard
            key={flashcard.id}
            id={flashcard.id}
            question={flashcard.question}
            answer={flashcard.answer}
            category={flashcard.category.name}
            knownCount={flashcard.knownCount}
            onDelete={() => handleDelete(flashcard)}
            onEdit={() => handleEdit(flashcard)}
          />
        ))}
      </div>
      {selectedFlashcard && (
        <DeleteFlashcardDialog
          isOpen={isDeleteModalOpen}
          onOpenChange={setIsDeleteModalOpen}
          flashcard={selectedFlashcard}
        />
      )}
      {selectedFlashcard && (
        <EditFlashcardDialog
          isOpen={isEditModalOpen}
          onOpenChange={setIsEditModalOpen}
          flashcard={selectedFlashcard}
        />
      )}
    </>
  );
}

export default FlashcardList;
