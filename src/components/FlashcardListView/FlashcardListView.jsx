import React from "react";
import listFlashcards from "@/actions/list-flashcards";
import LoadMoreClient from "../LoadMoreClient";
import FlashCard from "../FlashCard";

import { base } from "./FlashcardListView.module.css";

async function FlashcardListView() {
  const {
    flashcards: initialFlashcards,
    nextOffset,
    timestamp,
  } = await listFlashcards();

  if (initialFlashcards.length === 0) {
    return (
      <div>
        <h3>No cards yet</h3>
        <p>
          Add your first card using the form above and it will show up
          here.
        </p>
      </div>
    );
  }

  return (
    <div>
      <div className={base}>
        {initialFlashcards.map(
          ({ id, question, answer, category }) => (
            <FlashCard
              key={id}
              question={question}
              answer={answer}
              category={category.name}
            />
          )
        )}
      </div>

      {nextOffset !== null && (
        <LoadMoreClient key={timestamp} initialOffset={nextOffset} />
      )}
    </div>
  );
}

export default FlashcardListView;
