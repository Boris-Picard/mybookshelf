import { Button } from "@/components/ui/button";
import addFavoriteBook from "@/components/dashboard/dashboardDetailedPage/favorite-button";
import { Books } from "@/types/Books";
import { Star } from "lucide-react";
import { useEffect } from "react";
import { getFavorite } from "@/components/dashboard/dashboardDetailedPage/actions/favorite-book";

const AddFavoriteButton = ({ book }: { book: Books }) => {
  const handleFavorite = async () => {
    try {
      const response = await addFavoriteBook({ book });
      return response;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const fetchFavorite = async () => {
      const response = await getFavorite(book.id);
      console.log(response);
    };
    fetchFavorite()
  }, []);

  return (
    <Button variant="outline" onClick={handleFavorite} className="flex gap-3">
      <Star />
      Ajouter aux favoris
    </Button>
  );
};

export default AddFavoriteButton;
