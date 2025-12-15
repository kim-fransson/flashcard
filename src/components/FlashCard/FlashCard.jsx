import React from "react";

import {
  base,
  header,
  body,
  answerLabel,
  footer,
} from "./Flashcard.module.css";
import Pill from "../Tag";

function FlashCard({ question, answer, category }) {
  return (
    <article className={base}>
      <header className={header}>
        <h3>{question}</h3>
      </header>
      <div className={body}>
        <span className={answerLabel}>Answer:</span>
        {answer}
      </div>
      <footer className={footer}>
        <Pill>{category}</Pill>
      </footer>
    </article>
  );
}

export default FlashCard;
