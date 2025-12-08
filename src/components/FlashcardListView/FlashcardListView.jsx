import React from "react";
import { listFlashcards } from "./helpers";

async function FlashcardListView() {
  const flashcards = await listFlashcards();

  if (flashcards.length === 0) {
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
  return <div></div>;
}

export default FlashcardListView;
