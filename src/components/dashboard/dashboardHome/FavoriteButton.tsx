"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import { createFavorite } from "@/components/dashboard/dashboardHome/actions/favorite-action";

interface UserBook {
  bookId: string;
  name: string;
  author: string;
  date: string;
  price: string;
  category: string;
  description: string;
  link: string;
  userId: string;
}

interface BookId {
  bookId: string
}

export default function FavoriteButtonClient({bookId}: {bookId: BookId}) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  
  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const getId = () => {
    console.log(bookId);
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
    userId: "clz5du9qw000dpen02o5cssxl",
  };

  const handleSubmit = () => {
    createFavorite(data);
  };

  return (
    <form action={handleSubmit}>
      <button type="submit" onClick={getId}>
        <div onClick={handleClick} className="cursor-pointer">
          {isClicked ? <Star fill="gold" color="gold" /> : <Star />}
        </div>
      </button>
    </form>
  );
}
