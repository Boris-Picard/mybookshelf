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
      <Button onClick={() => setSlice(slice + 3)}>Voir plus</Button>
    </div>
  );
};

export default BooksList;
