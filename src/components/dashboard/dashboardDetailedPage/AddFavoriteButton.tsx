import { Button } from "@/components/ui/button";
import addFavoriteBook from "@/components/dashboard/dashboardDetailedPage/add-favorite-button";
import { Books } from "@/types/Books";

const AddFavoriteButton = ({ book }: { book: Books }) => {
  
  const handleFavorite = async () => {
    try {
      const response = await addFavoriteBook({ book });
    } catch (error) {
      console.log(error);
    }
  };

  return <Button onClick={handleFavorite}>Ajouter aux favoris</Button>;
};

export default AddFavoriteButton;
