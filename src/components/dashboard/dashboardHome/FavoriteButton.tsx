"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import { createFavorite } from "@/components/dashboard/dashboardHome/actions/favorite-action";
import { Books } from "@/types/Books";

import { toast } from "react-toastify";
import { FavoriteBook } from "@/types/FavoriteBook";

export default function FavoriteButtonClient({
  book,
  isFavorite,
}: {
  book: Books;
  isFavorite: FavoriteBook;
}) {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    // get all favorite ids
    const favoritesIds = isFavorite.map(({ bookId }) => {
      return bookId;
    });

    // if in favoritesIds include an id from fetched book fill star icon
    if (favoritesIds.includes(book.id)) {
      setIsClicked(true);
    }
  });

  const handleSubmit = async () => {
    const {
      id,
      title: name,
      authors: author,
      publishedDate: date,
      amount: price,
      categories: category,
      description,
      previewLink: link,
    } = book;

    const addFavorite = await createFavorite({
      bookId: id,
      name,
      author,
      date,
      price: price?.toString(),
      category,
      description,
      link,
    });

    if (addFavorite === true) {
      toast.success("Livre ajouté aux favoris");
    } else {
      toast.error(addFavorite);
    }
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
