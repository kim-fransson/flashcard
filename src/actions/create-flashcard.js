"use server";

import { CARDS_PATH } from "@/constants";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function createFlashcard(formData) {
  const { question, answer, category } = Object.fromEntries(formData);

  const flashcard = await prisma.flashcard.create({
    data: {
      question,
      answer,
      category: {
        connectOrCreate: {
          where: { name: category },
          create: { name: category },
        },
      },
    },
  });

  revalidatePath(CARDS_PATH, "page");

  return flashcard;
}

export default createFlashcard;
