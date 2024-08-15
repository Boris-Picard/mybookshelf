import { useEffect, useState } from "react";
import GetAllReadBooks from "./get-all-books";
import Image from "next/image";
import { SkeletonReadStats } from "./SkeletonReadStats";

import book from "/public/static/img/book.svg"
import pages from "/public/static/img/multiple.svg"

const BookReadStats = () => {
  const [nbPages, setNbPages] = useState<number | null>(null);
  const [nbBook, setNbBooks] = useState<number | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const response = await GetAllReadBooks();
        if (response && typeof response !== "string") {
          setNbPages(response._sum.pageNumber);
          setNbBooks(response._count.id);
          setLoading(false);
        }
      } catch (error) {
        if (error instanceof Error && typeof error.message === "string") {
          setErrorMessage(error.message);
        }
      }
    };
    fetchAllBooks();
  }, []);

  if (errorMessage !== null) {
    return <h1 className="text-xl font-bold text-red-500">{errorMessage}</h1>;
  }

  if (loading) {
    return <SkeletonReadStats />;
  }

  return (
    <div className="flex items-center justify-start md:justify-center md:mt-3 py-12 xl:py-0">
      {nbPages && (
        <>
          <Image
            src={book}
            width={64}
            height={64}
            alt="book"
            loading="lazy"
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
            src={pages}
            width={64}
            height={64}
            loading="lazy"
            alt="pages"
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
