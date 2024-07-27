"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import { createFavorite } from "./actions/favorite-action";

export default function FavoriteButtonClient() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <form action={createFavorite}>
      <button type="submit">
        <div onClick={handleClick} className="cursor-pointer">
          {isClicked ? <Star fill="gold" color="gold" /> : <Star />}
        </div>
      </button>
    </form>
  );
}
