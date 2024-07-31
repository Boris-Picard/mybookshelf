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
          response.map((item) => addFavoriteBook(item));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchFavorites();
  }, []);

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
