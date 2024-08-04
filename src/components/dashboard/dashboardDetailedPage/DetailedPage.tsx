"use client";

import useDetailedBook from "@/hooks/useDetailedBook";
import Image from "next/image";
import DOMPurify from "dompurify";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface DetailedPageProps {
  bookId: string;
}

const DetailedPage: React.FC<DetailedPageProps> = ({ bookId }) => {
  const { detailedBook } = useDetailedBook(bookId);
  const [book] = detailedBook;
  console.log(book);

  if (detailedBook.length === 0) {
    return (
      <h1 className="text-xl text-muted-foreground">Pas de livres trouvés</h1>
    );
  }

  const description = book.description;
  const cleanDescription = DOMPurify.sanitize(description);

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-center">{book.title}</h1>
      <div className="grid grid-cols-3 py-8">
        <div className="col-span-1">
          <Image
            src={book.thumbnail ?? "/assets/default-book.png"}
            alt={book.title}
            width={512}
            height={512}
            className="rounded-xl"
            priority={false}
          />
          <div className="flex gap-3 mt-3 justify-start">
            <Button>Ajouter aux favoris</Button>
            <Button>Lire sur Google</Button>
          </div>
        </div>
        <div className="col-span-2 p-8 space-y-3">
          <div className="flex flex-col space-y-3">
            <span className="font-semibold">Auteur : {book.authors}</span>
            <div
              className="text-pretty py-8"
              dangerouslySetInnerHTML={{ __html: cleanDescription }}
            />
            <hr />
          </div>
          <div className="py-8 space-y-3">
            {book.categories && (
              <div>
                <span className="font-bold">Catégories : </span>
                {book.categories}
              </div>
            )}
            <div>
              <span className="font-bold">Date de publication : </span>
              {book.publishedDate}
            </div>
            {book.averageRating && (
              <div>
                <span className="font-bold">Notes : </span>
                {book.averageRating}
              </div>
            )}
            {book.ratingsCount && (
              <div>
                <span className="font-bold">Reviews : </span>
                {book.ratingsCount}
              </div>
            )}
            {book.amount && (
              <div>
                <span className="font-bold">Prix : </span>
                {book.amount} EUR
              </div>
            )}
            {book.pdf && (
              <div>
                <span className="font-bold">PDF : </span>
                <Link href={book.pdf} target="_blank">
                  <Button variant="link">Télécharger le PDF</Button>
                </Link>
              </div>
            )}
            {book.infoLink && (
              <div>
                <span className="font-bold">Page d'achat Google : </span>
                <Link href={book.infoLink} target="_blank">
                  <Button variant="link">Acheter le livre</Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
