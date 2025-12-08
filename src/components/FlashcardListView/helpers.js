import prisma from "@/lib/prisma";

export async function listFlashcards(cursorId = 0) {
  const flashcards = await prisma.flashcard.findMany({
    take: 12,
    cursor: {
      id: cursorId,
    },
  });

  return flashcards;
}
