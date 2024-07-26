"use client";

import useSearchBooks from "@/hooks/useSearchBooks";
import CardList from "@/components/dashboard/dashboardHome/CardTemplateList";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const BooksList: React.FC = () => {
  const [slice, setSlice] = useState<number>(3);
  const { books, errorMessage } = useSearchBooks({ slice });
  // console.log(Object.keys(books).length);

  if (errorMessage) {
    return <h1 className="text-xl text-red-500">{errorMessage}</h1>;
  }

  return (
    <div className="space-y-4">
      {books.map((item) => {
        return <CardList books={item} />;
      })}
      <div className="flex justify-between mx-auto space-x-3">
        {slice < 20 && <Button onClick={() => setSlice(slice + 3)} className="w-1/4" variant="outline">Voir plus</Button>}
        {slice > 3 && <Button onClick={() => setSlice(slice - 3)} className="w-1/4" variant="outline">Voir moins</Button>}
      </div>
    </div>
  );
};

export default BooksList;
