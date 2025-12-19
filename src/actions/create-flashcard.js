"use server";

import { FLASHCARDS_PATH } from "@/constants";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function createFlashcard(_prevState, formData) {
  console.log({ formData });
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

  revalidatePath(FLASHCARDS_PATH, "page");

  return { success: true, flashcard };
}

export default createFlashcard;
