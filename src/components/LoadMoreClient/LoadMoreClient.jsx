"use client";

import listFlashcards from "@/actions/list-flashcards";
import React from "react";

import { base } from "./LoadMoreClient.module.css";
import Button from "../Button";
import FlashcardList from "../FlashcardList";

function LoadMoreClient({ initialOffset, filters }) {
  const [flashcards, setFlashcards] = React.useState([]);
  const [offset, setOffset] = React.useState(initialOffset);

  async function handleLoadMore() {
    const res = await listFlashcards({
      offset,
      seed: filters.seed,
      hideMastered: filters.hideMastered === "true",
    });

    setFlashcards((prev) => [...prev, ...res.flashcards]);
    setOffset(res.nextOffset);
  }

  return (
    <div className={base}>
      {flashcards.length !== 0 && (
        <FlashcardList flashcards={flashcards} />
      )}

      {offset !== null ? (
        <Button variant='secondary' onClick={handleLoadMore}>
          Load More
        </Button>
      ) : (
        <p>No more cards to load</p>
      )}
    </div>
  );
}

export default LoadMoreClient;
