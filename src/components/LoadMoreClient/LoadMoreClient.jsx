"use client";

import listFlashcards from "@/actions/list-flashcards";
import React from "react";

function LoadMoreClient({ initialOffset }) {
  const [flashcards, setFlashcards] = React.useState([]);
  const [offset, setOffset] = React.useState(initialOffset);

  async function handleLoadMore() {
    const res = await listFlashcards(offset);

    setFlashcards((prev) => [...prev, ...res.flashcards]);
    setOffset(res.nextOffset);
  }

  return (
    <div>
      <ul>
        {flashcards.map(({ id, question, answer, category }) => (
          <li key={id}>
            <article>
              <h3>{question}</h3>
              <p>{answer}</p>
              <footer>{category.name}</footer>
            </article>
          </li>
        ))}
      </ul>

      {offset !== null && (
        <button onClick={handleLoadMore}>Load More</button>
      )}
    </div>
  );
}

export default LoadMoreClient;
