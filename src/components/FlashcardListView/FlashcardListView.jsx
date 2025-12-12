import React from "react";
import listFlashcards from "@/actions/list-flashcards";
import LoadMoreClient from "../LoadMoreClient";

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
      <ul>
        {initialFlashcards.map(
          ({ id, question, answer, category }) => (
            <li key={id}>
              <article>
                <h3>{question}</h3>
                <p>{answer}</p>
                <footer>{category.name}</footer>
              </article>
            </li>
          )
        )}
      </ul>

      {nextOffset !== null && (
        <LoadMoreClient key={timestamp} initialOffset={nextOffset} />
      )}
    </div>
  );
}

export default FlashcardListView;
