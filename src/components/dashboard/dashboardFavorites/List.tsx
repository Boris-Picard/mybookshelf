"use client";

import { getFavorites } from "@/components/dashboard/dashboardHome/actions/favorite-action";
import { FavoriteResponse } from "@/types/FavoriteBook";
import { useEffect, useState } from "react";

const List: React.FC = () => {
  const [favorites, setFavorites] = useState<
    FavoriteResponse[] | null | string
  >(null);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await getFavorites();
        console.log(response);

        setFavorites(response);
      } catch (error) {
        console.log(error);
      }
    };
    fetchFavorites();
  }, []);
  console.log(favorites);

  return (
    <div>
      {favorites?.map(({ name }) => {
        return <h2>{name}</h2>;
      })}
    </div>
  );
};

export default List;
