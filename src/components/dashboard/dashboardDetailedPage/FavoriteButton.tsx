import { Button } from "@/components/ui/button";
import addFavoriteBookButton from "@/components/dashboard/dashboardDetailedPage/favorite-button";
import { Books } from "@/types/Books";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { getFavorite } from "@/components/dashboard/dashboardDetailedPage/actions/favorite-book";
import { FavoriteResponse } from "@/types/FavoriteBook";

const AddFavoriteButton = ({ book }: { book: Books }) => {
  const [favorite, setFavorite] = useState<FavoriteResponse>();

  const handleFavorite = async () => {
    try {
      const response = await addFavoriteBookButton({ book });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchFavorite = async () => {
      const response = await getFavorite(book.id);
      console.log(response);
      if (typeof response !== "string" && typeof response !== "boolean") {
        setFavorite(response);
      }
    };
    fetchFavorite();
  }, []);

  return (
    <Button variant="outline" onClick={handleFavorite} className="flex gap-3">
      <Star fill={favorite ? "gold" : ""} color={favorite ? "gold" : ""} />
      {favorite ? "" : "Ajouter aux favoris"}
    </Button>
  );
};

export default AddFavoriteButton;
