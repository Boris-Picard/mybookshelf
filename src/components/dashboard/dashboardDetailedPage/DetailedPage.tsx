"use client";

import useDetailedBook from "@/hooks/useDetailedBook";
import Image from "next/image";
import DOMPurify from "dompurify";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Ratings from "@/components/dashboard/Ratings";
import ReadBookButton from "@/components/dashboard/dashboardDetailedPage/ReadBookButton";
import AddFavoriteButton from "@/components/dashboard/dashboardDetailedPage/FavoriteButton";
import { SkeletonDetailedPage } from "@/components/dashboard/dashboardDetailedPage/SkeletonDetailedPage";

interface DetailedPageProps {
  bookId: string;
}

const DetailedPage: React.FC<DetailedPageProps> = ({ bookId }) => {
  const { detailedBook, loading } = useDetailedBook(bookId);
  const [book] = detailedBook;

  if (loading) {
    return <SkeletonDetailedPage />;
  }

  const description = book.description;
  const cleanDescription = DOMPurify.sanitize(description);

  return (
    <div className="flex flex-col">
      {detailedBook.length === 0 ? (
        <h1 className="text-xl text-muted-foreground">Pas de livres trouvés</h1>
      ) : (
        <>
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
                <AddFavoriteButton book={book} />
                <Link href={book.webReader} target="_blank">
                  <Button variant="link">Lire sur Google</Button>
                </Link>
              </div>
              <div className="mt-3">
                <ReadBookButton bookId={bookId} pageNumber={book.page} />
              </div>
            </div>
            <div className="col-span-2 p-8 space-y-3">
              <div className="flex flex-col space-y-3">
                {book.authors && (
                  <span className="font-semibold">Auteur : {book.authors}</span>
                )}
                {cleanDescription && (
                  <div
                    className="text-pretty py-8"
                    dangerouslySetInnerHTML={{ __html: cleanDescription }}
                  />
                )}
                {book.authors && cleanDescription && <hr />}
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
                  <div className="flex flex-nowrap w-1/4 items-center space-x-2">
                    <span className="font-bold">Notes</span>
                    <Ratings ratings={book.averageRating} />
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
        </>
      )}
    </div>
  );
};

export default DetailedPage;
