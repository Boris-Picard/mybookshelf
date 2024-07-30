"use client";

import { getFavorites } from "@/components/dashboard/dashboardHome/actions/favorite-action";
import { FavoriteResponse } from "@/types/FavoriteBook";
import { useEffect, useState } from "react";
import CardFavoriteTemplateList from "@/components/dashboard/dashboardFavorites/CardFavoriteTemplateList";

const FavoriteList: React.FC = () => {
  const [favorites, setFavorites] = useState<
    FavoriteResponse[] | null | string
  >(null);
  const [errorMessage, setErrorMessage] = useState<string>();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await getFavorites();

        if (response === null) {
          return null;
        }

        setFavorites(response);
      } catch (error) {
        if (error instanceof Error) {
          setErrorMessage(error.message);
        } else {
          setErrorMessage("Error occured");
        }
      }
    };
    fetchFavorites();
  }, []);

  if (favorites === null) {
    return (
      <h2 className="text-muted-foreground text-xl">
        Pas de favoris trouvés !
      </h2>
    );
  }

  if (typeof favorites === "string") {
    return errorMessage;
  }

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
