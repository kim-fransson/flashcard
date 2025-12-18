import CreateFlashcardForm from "@/components/CreateFlashcardForm";
import FlashcardListView from "@/components/FlashcardListView";
import VisuallyHidden from "@/components/VisuallyHidden";

import { page } from "./page.module.css";

export default async function CardsPage({ searchParams }) {
  const filters = await searchParams;

  return (
    <main className={page}>
      <VisuallyHidden>
        <h1>Manage your flashcards</h1>
      </VisuallyHidden>
      <section>
        <VisuallyHidden>
          <h2>Create flashcard</h2>
        </VisuallyHidden>
        <CreateFlashcardForm />
      </section>

      <section>
        <VisuallyHidden>
          <h2>View your flashcards</h2>
        </VisuallyHidden>
        <FlashcardListView filters={filters} />
      </section>
    </main>
  );
}
