import React from "react";
import listFlashcards from "@/actions/list-flashcards";

import LoadMoreClient from "../LoadMoreClient";

import styles from "./FlashcardListView.module.css";
import FlashcardList from "../FlashcardList";
import ShuffleButton from "../ShuffleButton";
import HideMasteredCheckbox from "../HideMasteredCheckbox";
import ResetFiltersButton from "../ResetFiltersButton";
import RefreshButton from "../RefreshButton";

async function FlashcardListView({ filters }) {
  const {
    flashcards: initialFlashcards,
    nextOffset,
    timestamp,
  } = await listFlashcards({
    seed: filters.seed,
    hideMastered: filters.hideMastered === "true",
  });

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
        <div className={styles.actionsGroup}>
          <HideMasteredCheckbox />
        </div>
        <div className={styles.actionsGroup}>
          <ShuffleButton />
          <ResetFiltersButton />
          <RefreshButton />
        </div>
      </div>
      <FlashcardList flashcards={initialFlashcards} />

      <LoadMoreClient
        key={timestamp}
        initialOffset={nextOffset}
        filters={filters}
      />
    </div>
  );
}

export default FlashcardListView;
