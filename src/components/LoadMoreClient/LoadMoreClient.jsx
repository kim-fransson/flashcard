"use client";

import listFlashcards from "@/actions/list-flashcards";
import React from "react";

import { base } from "./LoadMoreClient.module.css";
import Button from "../Button";
import FlashcardList from "../FlashcardList";
import { useSpinDelay } from "spin-delay";

function LoadMoreClient({ initialOffset, filters }) {
  const [flashcards, setFlashcards] = React.useState([]);
  const [offset, setOffset] = React.useState(initialOffset);

  const [pending, startTransition] = React.useTransition();

  const showLoading = useSpinDelay(pending, {
    delay: 500,
    minDuration: 200,
  });

  async function handleLoadMore() {
    startTransition(async () => {
      const result = await listFlashcards({
        offset,
        seed: filters.seed,
        hideMastered: filters.hideMastered === "true",
      });

      if (result.success) {
        setFlashcards((prev) => [...prev, ...result.flashcards]);
        setOffset(result.nextOffset);
      }
    });
  }

  return (
    <div className={base}>
      {flashcards.length !== 0 && (
        <FlashcardList flashcards={flashcards} />
      )}

      {offset !== null ? (
        <Button variant='secondary' onClick={handleLoadMore}>
          {showLoading ? "Loading..." : "Load More"}
        </Button>
      ) : (
        <p>No more cards to load</p>
      )}
    </div>
  );
}

export default LoadMoreClient;
