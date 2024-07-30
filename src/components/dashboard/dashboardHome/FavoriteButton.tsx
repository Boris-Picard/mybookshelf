"use client";

import { Star } from "lucide-react";
import { useEffect, useState } from "react";
import {
  createFavorite,
  deleteFavorite,
} from "@/components/dashboard/dashboardHome/actions/favorite-action";
import { Books } from "@/types/Books";

import { toast } from "react-toastify";
import { FavoriteResponse } from "@/types/FavoriteBook";
import { useFavorites } from "@/store/favorites";

export default function FavoriteButtonClient({
  book,
  isFavorite,
}: {
  book?: Books;
  isFavorite: FavoriteResponse[] | FavoriteResponse | null | string;
}) {
  const [isClicked, setIsClicked] = useState<boolean>(false);
  // zustand store
  const { addFavoriteBook, removeFavoriteBook } = useFavorites();

  const handleClick = () => {
    setIsClicked(!isClicked);
  };

  useEffect(() => {
    const getFavorites = () => {
      // get all favorite ids
      if (!isFavorite || typeof isFavorite === "string") return null;

      if (Array.isArray(isFavorite)) {
        const favoritesIds = isFavorite.map((favorite) => {
          if (typeof favorite === "string") {
            return null;
          }
          return favorite.bookId;
        });

        // if in favoritesIds include an id from fetched book fill star icon
        if (book && favoritesIds.includes(book.id)) {
          setIsClicked(true);
        }
      }
    };
    getFavorites();
  }, []);

  const handleSubmit = async () => {
    try {
      if (isClicked && typeof book === "object") {
        const {
          id,
          title: name,
          authors: author,
          publishedDate: date,
          amount: price,
          thumbnail,
          categories,
          description,
          averageRating,
          ratingsCount,
          previewLink: link,
        } = book;

        const categoryString = Array.isArray(categories)
          ? categories.join(", ")
          : categories;

        const addFavorite = await createFavorite({
          bookId: id,
          name,
          author,
          date,
          thumbnail,
          price: price?.toString(),
          averageRating,
          ratingsCount,
          category: categoryString,
          description,
          link,
        });

        if (addFavorite && typeof addFavorite === "object") {
          toast.success("Livre ajouté aux favoris");
          addFavoriteBook(addFavorite);
          setIsClicked(true);
        } else {
          toast.error(addFavorite);
          setIsClicked(false);
        }
      } else {
        if (typeof book !== "undefined") {
          const delFavorite = await deleteFavorite(book.id);
          if (delFavorite === true) {
            toast.success("Favori supprimé avec succès !");
            removeFavoriteBook(book.id);
            setIsClicked(false);
          } else {
            toast.error(delFavorite);
            setIsClicked(true);
          }
        }
      }
    } catch (error) {
      console.log(error);
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
