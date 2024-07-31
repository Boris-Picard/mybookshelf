import { useFavorites } from "@/store/favorites";
import { Star } from "lucide-react";
import { useState } from "react";

const FromFavoriteButton = () => {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  // zustand store
  const { removeFavoriteBook } = useFavorites();
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleSubmit = () => {};

  return (
    <form action={handleSubmit}>
      <button type="submit">
        <div onClick={handleClick} className="cursor-pointer">
          {isClicked ? <Star fill="gold" color="gold" /> : <Star />}
        </div>
      </button>
    </form>
  );
};

export default FromFavoriteButton;
