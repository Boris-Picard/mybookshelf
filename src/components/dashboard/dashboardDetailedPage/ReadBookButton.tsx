import { Button } from "@/components/ui/button";
import AddReadBook from "@/components/dashboard/dashboardDetailedPage/AddReadBook";
import { toast } from "react-toastify";

const ReadBookButton = ({
  bookId,
  pageNumber,
}: {
  bookId: string;
  pageNumber: number;
}) => {
  const handleCreateBook = async () => {
    try {
      const response = await AddReadBook(bookId, pageNumber);
      if (response === true) {
        toast.success("Livre ajouté comme lu avec succes");
      } else {
        toast.error(response);
      }
    } catch (error) {
      console.log(error);
      toast.error("Erreur lors de l'ajout du livre");
    }
  };

  return (
    <Button type="button" onClick={handleCreateBook}>
      livre lu
    </Button>
  );
};

export default ReadBookButton;
