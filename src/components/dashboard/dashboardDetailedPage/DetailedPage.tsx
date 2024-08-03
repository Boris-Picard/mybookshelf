"use client";

import useDetailedBook from "@/hooks/useDetailedBook";

interface DetailedPageProps {
  bookId: string;
}

const DetailedPage: React.FC<DetailedPageProps> = ({ bookId }) => {
  const { detailedBook } = useDetailedBook(bookId);
  console.log(detailedBook);

  return <h1>Detailed page {bookId}</h1>;
};

export default DetailedPage;
