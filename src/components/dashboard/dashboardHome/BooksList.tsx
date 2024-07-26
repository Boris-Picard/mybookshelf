"use client";

import useSearchBooks from "@/hooks/useSearchBooks";
import CardList from "@/components/dashboard/dashboardHome/CardTemplateList";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const BooksList: React.FC = () => {
  const [slice, setSlice] = useState<number>(3);
  const { books, errorMessage } = useSearchBooks({ slice });

  if (errorMessage) {
    return <h1 className="text-xl text-red-500">{errorMessage}</h1>;
  }

  return (
    <div className="space-y-4">
      {books.map((item) => {
        return <CardList books={item} />;
      })}
      <div className="flex justify-between mx-auto space-x-3">
        <Button
          onClick={() => setSlice(slice + 3)}
          className="w-1/4"
          variant="outline"
          disabled={slice > 20}
        >
          Voir plus
        </Button>
        <Button
          onClick={() => setSlice(slice - 3)}
          className="w-1/4"
          variant="outline"
          disabled={slice <= 3}
        >
          Voir moins
        </Button>
      </div>
    </div>
  );
};

export default BooksList;
