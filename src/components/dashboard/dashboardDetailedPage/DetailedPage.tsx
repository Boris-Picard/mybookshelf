"use client";

import useDetailedBook from "@/hooks/useDetailedBook";
import Image from "next/image";

interface DetailedPageProps {
  bookId: string;
}

const DetailedPage: React.FC<DetailedPageProps> = ({ bookId }) => {
  const { detailedBook } = useDetailedBook(bookId);
  const [book] = detailedBook;

  if (detailedBook.length === 0) {
    return (
      <h1 className="text-xl text-muted-foreground">Pas de livres trouvés</h1>
    );
  }


  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-center">{book.title}</h1>
      <div className="grid grid-cols-4 gap-8 py-8">
        <div className="col-span-1">
          <Image
            src={book.thumbnail}
            alt={book.title}
            objectFit="cover"
            width={512}
            height={512}
          />
        </div>
        <div className="col-span-3">
          <div className="flex flex-col">
            <span>Auteur : {book.authors}</span>
            <span>{book.description}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
