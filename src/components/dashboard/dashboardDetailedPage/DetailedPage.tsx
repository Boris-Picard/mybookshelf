"use client";

import useDetailedBook from "@/hooks/useDetailedBook";
import Image from "next/image";
import DOMPurify from "dompurify";

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

  const description = book.description
  const cleanDescription = DOMPurify.sanitize(description)

  return (
    <div className="flex flex-col">
      <h1 className="text-4xl font-bold text-center">{book.title}</h1>
      <div className="grid grid-cols-4 gap-8 py-8">
        <div className="col-span-1">
          <Image
            src={book.thumbnail ?? "/assets/default-book.png"}
            alt={book.title}
            width={512}
            height={512}
            className="rounded-xl"
            priority={false}
          />
        </div>
        <div className="col-span-3 p-8">
          <div className="flex flex-col space-y-3">
            <span className="font-semibold">Auteur : {book.authors}</span>
            <div className="text-pretty py-8" dangerouslySetInnerHTML={{ __html: cleanDescription }} />
            <hr />
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailedPage;
