"use client";

import useSearchBooks from "@/hooks/useSearchBooks";

const BooksList = () => {
  const { books } = useSearchBooks();
  return (
    <div>
      <h1 className="text-xl text-slate-50">liste des livres</h1>
      <ul>
        {books.map(({ title }) => {
          return <li>{title}</li>;
        })}
      </ul>
    </div>
  );
};

export default BooksList;
