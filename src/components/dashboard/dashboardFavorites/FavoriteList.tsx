"use client";

import CardFavoriteTemplateList from "@/components/dashboard/dashboardFavorites/CardFavoriteTemplateList";
import { useFavorites } from "@/store/favorites";

const FavoriteList: React.FC = () => {
  const { favorites } = useFavorites();
  
  return (
    <div>
      {favorites.map((item) => {
        if (typeof item === "string") {
          return null;
        } else {
          return (
            <CardFavoriteTemplateList key={item.bookId} favorites={item} />
          );
        }
      })}
    </div>
  );
};

export default FavoriteList;
