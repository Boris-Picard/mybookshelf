"use client";

import useSearchBooks from "@/hooks/useSearchBooks";
import CardList from "@/components/dashboard/dashboardHome/CardTemplateList";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import {
  getFavorites,
  findMostFrequentCategory,
} from "@/components/dashboard/dashboardHome/actions/favorite-action";
import { useFavorites } from "@/store/favorites";
import { SkeletonCardBooksList } from "@/components/dashboard/dashboardHome/SkeletonCardBooksList";

interface BooksListProps {
  userId: string;
}

const BooksList: React.FC<BooksListProps> = ({
  userId,
}: {
  userId: string;
}) => {
  const [slice, setSlice] = useState<number>(3);
  const [category, setCategory] = useState<string | null>(null);
  const { books, nbBooks, errorMessage, loading } = useSearchBooks({
    slice,
    category,
  });
  const { favorites, addFavoriteBook } = useFavorites();

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await findMostFrequentCategory();
        if (Array.isArray(response)) {
          const [category] = response.map((item) => item.category);
          setCategory(category);
        }
        if (!response) {
          setCategory("bestsellers");
        }
      } catch (error) {
        console.log(error);
      }
    };
    getCategory();
  }, []);

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

  if (loading) {
    return <SkeletonCardBooksList />;
  }

  return (
    <div className="space-y-4">
      {books.length === 0 ? (
        <h2 className="text-muted-foreground text-xl">
          Pas de livres trouvés !
        </h2>
      ) : (
        books.map((item) => {
          return (
            <CardList
              key={item.id}
              books={item}
              favorites={favorites}
              userId={userId}
            />
          );
        })
      )}
      <div className="flex justify-between mx-auto space-x-3">
        <Button
          onClick={() => setSlice(slice + 3)}
          className="sm:w-1/4 w-full"
          variant="outline"
          disabled={slice >= nbBooks}
        >
          <span>Voir plus</span>
        </Button>
        <Button
          onClick={() => setSlice(slice - 3)}
          className="sm:w-1/4 w-full"
          variant="outline"
          disabled={slice <= 3}
        >
          <span>Voir moins</span>
        </Button>
      </div>
    </div>
  );
};

export default BooksList;
