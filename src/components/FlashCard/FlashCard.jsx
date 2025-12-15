import React from "react";

import Pill from "../Tag";

import {
  base,
  header,
  body,
  answerLabel,
  footer,
} from "./Flashcard.module.css";
import KnownCount from "../KnownCount";

function FlashCard({ question, answer, category, knownCount }) {
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
        <KnownCount value={knownCount} />
      </footer>
    </article>
  );
}

export default FlashCard;
