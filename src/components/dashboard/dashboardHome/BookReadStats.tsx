import { useEffect, useState } from "react";
import GetAllReadBooks from "./get-all-books";
import Image from "next/image";

const BookReadStats = () => {
  const [nbPages, setNbPages] = useState<number | null>(null);
  const [nbBook, setNbBooks] = useState<number | null>(null);

  useEffect(() => {
    const fetchAllBooks = async () => {
      const response = await GetAllReadBooks();
      if (response) {
        setNbPages(response._sum.pageNumber);
        setNbBooks(response._count.id);
      }
    };
    fetchAllBooks();
  }, []);

  return (
    <div className="flex items-center justify-start xl:justify-center xl:mt-3">
      {nbPages && (
        <>
          <Image
            src="/assets/book.svg"
            width={64}
            height={64}
            alt="book"
            color="gold"
          />
          <div className="flex flex-col mx-10 items-center">
            <span className="text-xl text-muted-foreground">Pages lues</span>
            <span className="text-2xl font-bold">{nbPages}</span>
          </div>
        </>
      )}
      {nbBook && (
        <>
          <Image
            src="/assets/multiple-page.svg"
            width={64}
            height={64}
            alt="book"
            color="gold"
          />
          <div className="flex flex-col mx-10 items-center">
            <span className="text-xl text-muted-foreground">Livre lus</span>
            <span className="text-2xl font-bold">{nbBook}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default BookReadStats;
