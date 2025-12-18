import React from "react";
import listFlashcards from "@/actions/list-flashcards";

import LoadMoreClient from "../LoadMoreClient";

import styles from "./FlashcardListView.module.css";
import FlashcardList from "../FlashcardList";
import ShuffleButton from "../ShuffleButton";

async function FlashcardListView({ filters }) {
  const {
    flashcards: initialFlashcards,
    nextOffset,
    timestamp,
  } = await listFlashcards(0, filters.shuffle);

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
    <div className={styles.base}>
      <div className={styles.actions}>
        <div></div>
        <ShuffleButton />
      </div>
      <FlashcardList flashcards={initialFlashcards} />

      {nextOffset !== null && (
        <LoadMoreClient
          key={timestamp}
          initialOffset={nextOffset}
          shuffle={filters.shuffle}
        />
      )}
    </div>
  );
}

export default FlashcardListView;
