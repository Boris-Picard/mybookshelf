"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import { createFavorite } from "@/components/dashboard/dashboardHome/actions/favorite-action";

export default function FavoriteButtonClient() {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  interface UserBook {
    bookId: string;
    name: string;
    author: string;
    date: string;
    price: string;
    category: string;
    description: string;
    link: string;
  }

  const data: UserBook = {
    bookId: "try",
    name: "try",
    author: "try",
    date: "try",
    price: "try",
    category: "try",
    description: "try",
    link: "try",
  };

  const handleSubmit = () => {
    createFavorite(data);
  };

  return (
    <form action={handleSubmit}>
      <button type="submit">
        <div onClick={handleClick} className="cursor-pointer">
          {isClicked ? <Star fill="gold" color="gold" /> : <Star />}
        </div>
      </button>
    </form>
  );
}
