import { Button } from "@/components/ui/button";
import {
  addFavoriteBookButton,
  deleteFavoriteButton,
} from "@/components/dashboard/dashboardDetailedPage/favorite-button";
import { Books } from "@/types/Books";
import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { getFavorite } from "@/components/dashboard/dashboardDetailedPage/actions/favorite-book";
import { FavoriteResponse } from "@/types/FavoriteBook";
import { toast } from "react-toastify";

const AddFavoriteButton = ({ book }: { book: Books }) => {
  const [favorite, setFavorite] = useState<FavoriteResponse>();

  const handleFavorite = async () => {
    try {
      if (!favorite) {
        const response = await addFavoriteBookButton({ book });
        if (typeof response !== "string" && typeof response !== undefined) {
          toast.success("Livre ajouté aux favoris");
          setFavorite(response);
          return response;
        }
        if (typeof response === "string") {
          toast.error(response);
          return response;
        }
      }
      if (favorite) {
        const response = await deleteFavoriteButton(book.id);
        if (typeof response !== "string" && typeof response !== undefined) {
          toast.success("Livre supprimé des favoris");
          setFavorite(undefined);
          return response;
        }
        if (typeof response === "string") {
          toast.error(response);
          return response;
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchFavorite = async () => {
      const response = await getFavorite(book.id);
      if (typeof response !== "string" && typeof response !== "boolean") {
        setFavorite(response);
      }
    };
    fetchFavorite();
  }, []);

  return (
    <Button variant="outline" onClick={handleFavorite} className="flex gap-3">
      <Star
        fill={favorite ? "gold" : ""}
        color={favorite ? "gold" : "white"}
      />
      {favorite ? "" : "Ajouter aux favoris"}
    </Button>
  );
};

export default AddFavoriteButton;
