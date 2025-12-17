import React from "react";
import listFlashcards from "@/actions/list-flashcards";
import LoadMoreClient from "../LoadMoreClient";

import { base } from "./FlashcardListView.module.css";
import FlashcardList from "../FlashcardList/FlashcardList";

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
    <div className={base}>
      <FlashcardList flashcards={initialFlashcards} />

      {nextOffset !== null && (
        <LoadMoreClient key={timestamp} initialOffset={nextOffset} />
      )}
    </div>
  );
}

export default FlashcardListView;
