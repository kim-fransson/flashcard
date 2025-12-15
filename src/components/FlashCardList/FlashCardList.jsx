import React from "react";

import { base } from "./FlashCardList.module.css";
import FlashCard from "../FlashCard";

function FlashCardList({ children, flashcards }) {
  return (
    <div className={base}>
      {flashcards.map(({ id, question, answer, category }) => (
        <FlashCard
          key={id}
          question={question}
          answer={answer}
          category={category.name}
        />
      ))}
    </div>
  );
}

export default FlashCardList;
