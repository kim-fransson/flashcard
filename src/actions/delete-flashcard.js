"use server";

import { FLASHCARDS_PATH } from "@/constants";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

async function deleteFlashcard(id) {
  await prisma.flashcard.delete({
    where: {
      id,
    },
  });

  revalidatePath(FLASHCARDS_PATH, "page");
  return { success: true };
}

export default deleteFlashcard;
