import { Button } from "@/components/ui/button";
import AddReadBook from "@/components/dashboard/dashboardDetailedPage/AddReadBook";

const ReadBookButton = ({
  bookId,
  pageNumber,
}: {
  bookId: string;
  pageNumber: number;
}) => {
  return (
    <form action={() => AddReadBook(bookId, pageNumber)}>
      <Button type="submit">livre lu</Button>
    </form>
  );
};

export default ReadBookButton;
