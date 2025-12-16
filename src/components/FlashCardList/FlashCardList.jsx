import React from "react";

import { base } from "./FlashCardList.module.css";
import FlashCard from "../FlashCard";

function FlashCardList({ flashcards }) {
  return (
    <div className={base}>
      {flashcards.map(
        ({ id, question, answer, category, knownCount }) => (
          <FlashCard
            key={id}
            id={id}
            question={question}
            answer={answer}
            category={category.name}
            knownCount={knownCount}
          />
        )
      )}
    </div>
  );
}

export default FlashCardList;
