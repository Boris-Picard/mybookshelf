"use client";

import { Star } from "lucide-react";
import { useState } from "react";
import { createFavorite } from "@/components/dashboard/dashboardHome/actions/favorite-action";
import { Books } from "@/types/Books";

export default function FavoriteButtonClient({ book }: { book: Books }) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  const handleSubmit = () => {
    const {
      id: bookId,
      title: name,
      authors: author,
      publishedDate: date,
      amount: price,
      categories: category,
      description,
      previewLink: link,
    } = book;

    createFavorite({
      bookId,
      name,
      author,
      date,
      price: price.toString(),
      category: category,
      description,
      link,
    });
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
