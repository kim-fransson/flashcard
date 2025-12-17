"use client";

import listFlashcards from "@/actions/list-flashcards";
import React from "react";

import { base, loadMoreBtn } from "./LoadMoreClient.module.css";
import Button from "../Button";
import FlashcardList from "../FlashcardList";

function LoadMoreClient({ initialOffset }) {
  const [flashcards, setFlashcards] = React.useState([]);
  const [offset, setOffset] = React.useState(initialOffset);

  async function handleLoadMore() {
    const res = await listFlashcards(offset);

    setFlashcards((prev) => [...prev, ...res.flashcards]);
    setOffset(res.nextOffset);
  }

  return (
    <div className={base}>
      {flashcards.length !== 0 && (
        <FlashcardList flashcards={flashcards} />
      )}

      {offset !== null && (
        <div className={loadMoreBtn}>
          <Button variant='secondary' onClick={handleLoadMore}>
            Load More
          </Button>
        </div>
      )}
    </div>
  );
}

export default LoadMoreClient;
