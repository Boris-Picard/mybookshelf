"use client";

import useSearchBooks from "@/hooks/useSearchBooks";

const BooksList = () => {
  const { books, errorMessage } = useSearchBooks();
  console.log(books);

  if(!books && errorMessage) {
    return <h1 className="text-xl text-red-500">{errorMessage}</h1>
  }
  
  return (
    <div>
      <h1 className="text-xl text-slate-50">liste des livres</h1>
      <ul>
        {books.map(({ volumeInfo }) => {
          return <li>{volumeInfo}</li>;
        })}
      </ul>
    </div>
  );
};

export default BooksList;
