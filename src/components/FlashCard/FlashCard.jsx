import React from "react";

import Pill from "../Tag";
import ProgressBar from "../ProgressBar";

import {
  base,
  header,
  body,
  answerLabel,
  footer,
  pillWrapper,
  progressBarWrapper,
} from "./Flashcard.module.css";

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
        <div className={pillWrapper}>
          <Pill>{category}</Pill>
        </div>

        <div className={progressBarWrapper}>
          <ProgressBar value={knownCount} />
        </div>
      </footer>
    </article>
  );
}

export default FlashCard;
