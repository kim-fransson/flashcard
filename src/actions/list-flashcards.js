"use server";

import prisma from "@/lib/prisma";
import seedrandom from "seedrandom";
import _ from "lodash";
import { KNOWN_COUNT_MAX } from "@/constants";
import { shuffleWithSeed } from "@/utils";

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

const defaultOptions = {
  offset: 0,
  seed: null,
  hideMastered: false,
};

const getSeededOrder = (seed) => {
  const rng = seedrandom(seed.toString());
  const index = Math.floor(rng() * orderBys.length);
  return orderBys[index];
};

const listFlashcards = async ({
  offset = defaultOptions.offset,
  seed = defaultOptions.seed,
  hideMastered = defaultOptions.hideMastered,
}) => {
  let flashcards = [];

  if (seed !== null) {
    const randomOrderBy = getSeededOrder(seed);

    flashcards = await prisma.flashcard.findMany({
      take: LIMIT,
      skip: offset,
      orderBy: randomOrderBy,
      include: {
        category: { select: { name: true } },
      },
      where: {
        ...(hideMastered && {
          knownCount: { not: KNOWN_COUNT_MAX },
        }),
      },
    });

    flashcards = shuffleWithSeed(flashcards, seed);
  } else {
    flashcards = await prisma.flashcard.findMany({
      take: LIMIT,
      skip: offset,
      orderBy: { id: "desc" },
      include: { category: { select: { name: true } } },
      where: {
        ...(hideMastered && { knownCount: { not: KNOWN_COUNT_MAX } }),
      },
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
};
export default listFlashcards;
