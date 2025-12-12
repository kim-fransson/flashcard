"use server";

import React from "react";
import prisma from "@/lib/prisma";

const LIMIT = 12;

const listFlashcards = React.cache(async (offset = 0) => {
  const flashcards = await prisma.flashcard.findMany({
    take: LIMIT,
    skip: offset,
    orderBy: { id: "desc" },
    include: {
      category: {
        select: { name: true },
      },
    },
  });

  const nextOffset =
    flashcards.length === LIMIT ? offset + LIMIT : null;

  const timestamp = new Date();

  return {
    flashcards,
    nextOffset,
    timestamp,
  };
});

export default listFlashcards;
