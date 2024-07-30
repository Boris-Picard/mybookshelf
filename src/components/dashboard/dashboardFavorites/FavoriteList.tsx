"use client";

import CardFavoriteTemplateList from "@/components/dashboard/dashboardFavorites/CardFavoriteTemplateList";
import { useFavorites } from "@/store/favorites";
import { useEffect } from "react";
import { getFavorites } from "@/components/dashboard/dashboardHome/actions/favorite-action";

const FavoriteList: React.FC = () => {
  const { favorites, addFavoriteBook } = useFavorites();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await getFavorites();
        if (typeof response !== "string") {
          const addedBookIds = new Set();
          response.map((favorite) => {
            if (
              favorite.bookId.length === 1 &&
              !addedBookIds.has(favorite.bookId)
            ) {
              addFavoriteBook(favorite);
              addedBookIds.add(favorite.bookId);
            }
          });
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchFavorites();
  }, []);
console.log(favorites);

  if (favorites.length === 0) {
    <div>
      <span className="text-xl text-muted-foreground">
        Pas livres ajouté aux favoris !
      </span>
    </div>;
  }

  return (
    <div className="space-y-4">
      {favorites.map((item) => {
        return <CardFavoriteTemplateList key={item.bookId} favorites={item} />;
      })}
    </div>
  );
};

export default FavoriteList;
