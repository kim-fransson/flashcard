import CreateFlashcardForm from "@/components/CreateFlashcardForm";
import FlashcardListView from "@/components/FlashcardListView";
import VisuallyHidden from "@/components/VisuallyHidden";

export default async function CardsPage() {
  return (
    <main>
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
        <FlashcardListView />
      </section>
    </main>
  );
}
