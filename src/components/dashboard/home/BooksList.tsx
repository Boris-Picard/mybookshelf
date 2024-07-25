"use client";

import useSearchBooks from "@/hooks/useSearchBooks";
import CardList from "@/components/dashboard/home/CardList";

const BooksList: React.FC = () => {
  const { books, errorMessage } = useSearchBooks();

  if (errorMessage) {
    return <h1 className="text-xl text-red-500">{errorMessage}</h1>;
  }

  return (
    <div className="space-y-4">
      {books.map((item) => {
        return <CardList books={item} />;
      })}
    </div>
  );
};

export default BooksList;
