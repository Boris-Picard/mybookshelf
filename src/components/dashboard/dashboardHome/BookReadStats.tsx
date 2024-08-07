import { useEffect } from "react";
import GetAllReadBooks from "./get-all-books";

const BookReadStats = () => {
  useEffect(() => {
    const fetchAllBooks = async () => {
      const response = await GetAllReadBooks();
      console.log(response);
    };
    fetchAllBooks();
  }, []);

  return <h1 className="text-xl"></h1>;
};

export default BookReadStats;
