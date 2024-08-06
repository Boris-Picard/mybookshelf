import AddReadBook from "@/components/dashboard/dashboardDetailedPage/AddReadBook";
import { toast } from "react-toastify";
import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";
import { useState } from "react";

const ReadBookButton = ({
  bookId,
  pageNumber,
}: {
  bookId: string;
  pageNumber: number;
}) => {
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleCreateBook = async () => {
    try {
      const response = await AddReadBook(bookId, pageNumber);
      if (response === true) {
        toast.success("Vous avez marqué ce livre comme lu avec succès.");
        setIsSubscribed(true);
      } else {
        toast.error(response);
        setIsSubscribed(false);
      }
    } catch (error) {
      console.log(error);
      toast.error("Erreur lors de l'ajout du livre");
      setIsSubscribed(false);
    }
  };

  return (
    <button onClick={handleCreateBook}>
      <AnimatedSubscribeButton
        buttonColor="#000000"
        buttonTextColor="#ffffff"
        subscribeStatus={isSubscribed}
        initialText={
          <span className="group inline-flex items-center">
            Marquer comme lu
            <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </span>
        }
        changeText={
          <span className="group inline-flex items-center">
            <CheckIcon className="mr-2 h-4 w-4" />
            Livre lu !{" "}
          </span>
        }
      />
    </button>
  );
};

export default ReadBookButton;
