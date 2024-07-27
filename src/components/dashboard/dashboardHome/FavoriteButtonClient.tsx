"use client"

import { Star } from "lucide-react";
import { useState } from "react";

export default function FavoriteButtonClient() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  return (
    <div onClick={handleClick} className="cursor-pointer">
      {isClicked ? <Star fill="gold" color="gold" /> : <Star />}
    </div>
  );
}
