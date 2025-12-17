"use client";

import React from "react";

import { base } from "./FlashCardList.module.css";
import FlashCard from "../FlashCard";
import DeleteFlashCardDialog from "../DeleteFlashcardDialog";
import EditFlashcardDialog from "../EditFlashcardDialog";

function FlashCardList({ flashcards }) {
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
          <FlashCard
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
        <DeleteFlashCardDialog
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

export default FlashCardList;
