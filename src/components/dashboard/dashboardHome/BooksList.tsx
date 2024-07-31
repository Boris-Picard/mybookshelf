"use client";

import useSearchBooks from "@/hooks/useSearchBooks";
import CardList from "@/components/dashboard/dashboardHome/CardTemplateList";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { getFavorites } from "@/components/dashboard/dashboardHome/actions/favorite-action";
import { useFavorites } from "@/store/favorites";

const BooksList: React.FC = () => {
  const [slice, setSlice] = useState<number>(3);
  const { books, errorMessage } = useSearchBooks({ slice });
  const { favorites, addFavoriteBook } = useFavorites();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await getFavorites();
        if (typeof response !== "string") {
          response.map((item) => addFavoriteBook(item));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchFavorites();
  }, []);

  if (errorMessage) {
    return <h1 className="text-xl text-red-500">{errorMessage}</h1>;
  }
  if (books.length === 0) {
    return (
      <h2 className="text-muted-foreground text-xl">Pas de livres trouvés !</h2>
    );
  }

  return (
    <div className="space-y-4">
      {books.map((item) => {
        return <CardList key={item.id} books={item} favorites={favorites} />;
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
