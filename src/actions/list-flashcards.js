"use server";

import React from "react";
import prisma from "@/lib/prisma";
import seedrandom from "seedrandom";
import _ from "lodash";

const LIMIT = 12;

const orderBys = [
  { id: "asc" },
  { id: "desc" },
  { question: "asc" },
  { question: "desc" },
  { answer: "asc" },
  { answer: "desc" },
  { category: { name: "asc" } },
  { category: { name: "desc" } },
];

const getSeededOrder = (seed) => {
  const rng = seedrandom(seed.toString());
  const index = Math.floor(rng() * orderBys.length);
  return orderBys[index];
};

const listFlashcards = React.cache(
  async (offset = 0, seed = null) => {
    let flashcards = [];

    console.log({ seed });

    if (seed !== null) {
      const randomOrderBy = getSeededOrder(seed);

      flashcards = await prisma.flashcard.findMany({
        take: LIMIT,
        skip: offset,
        orderBy: randomOrderBy,
        include: {
          category: { select: { name: true } },
        },
      });

      flashcards = _.shuffle(flashcards);
    } else {
      flashcards = await prisma.flashcard.findMany({
        take: LIMIT,
        skip: offset,
        orderBy: { id: "desc" },
        include: { category: { select: { name: true } } },
      });
    }

    const nextOffset =
      flashcards.length === LIMIT ? offset + LIMIT : null;

    const timestamp = new Date();

    return {
      flashcards,
      nextOffset,
      timestamp,
    };
  }
);

export default listFlashcards;
