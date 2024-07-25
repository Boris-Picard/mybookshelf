"use client";

import useSearchBooks from "@/hooks/useSearchBooks";
import CardList from "@/components/dashboard/home/CardList";

const BooksList: React.FC = () => {
  const { books, errorMessage } = useSearchBooks();
  
  if (errorMessage) {
    return <h1 className="text-xl text-red-500">{errorMessage}</h1>;
  }

  return (
    <div>
      <h1 className="text-xl text-slate-50">liste des livres</h1>
      <ul>
        {books.map((item) => {
          return <CardList books={item} />;
        })}
      </ul>
    </div>
  );
};

export default BooksList;
