import { Button } from "@/components/ui/button";
import addFavoriteBook from "@/components/dashboard/dashboardDetailedPage/add-favorite-book";
import { Books } from "@/types/Books";

const AddFavoriteButton = ({ book }: { book: Books }) => {
  console.log(book);
  
  const handleFavorite = async () => {
    try {
      const response = await addFavoriteBook({ book });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return <Button onClick={handleFavorite}>Ajouter aux favoris</Button>;
};

export default AddFavoriteButton;
