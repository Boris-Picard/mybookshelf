"use client";

import CardFavoriteTemplateList from "@/components/dashboard/dashboardFavorites/CardFavoriteTemplateList";
import { useFavorites } from "@/store/favorites";
import { useEffect, useState } from "react";
import { getFavorites } from "@/components/dashboard/dashboardHome/actions/favorite-action";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FavoriteResponse } from "@/types/FavoriteBook";
import { SkeletonCardFavorites } from "@/components/dashboard/dashboardFavorites/SkeletonCardFavorites";

const FavoriteList = ({ userId }: { bookId?: string; userId: string }) => {
  const { favorites, addFavoriteBook } = useFavorites();
  const [categoriesValue, setCategoriesValue] = useState<string | null>(null);
  const [authorsValue, setAuthorsValue] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await getFavorites();
        if (typeof response !== "string") {
          response.map((item) => addFavoriteBook(item));
          setLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchFavorites();
  }, []);

  const handleCategoriesValue = (value: string) => {
    setCategoriesValue(value);
  };

  const handleAuthorsValue = (value: string) => {
    setAuthorsValue(value);
  };

  // function to create a new array of categories with one category
  const getUniqueCategories = (favorites: FavoriteResponse[]): string[] => {
    const categories = favorites
      .map((fav) => fav.category) // get all categories
      .filter((category) => category !== null); // remove categories === null
    return [...new Set(categories)]; // return a new array of categories without duplicates category
  };
  const uniqueCategories = getUniqueCategories(favorites);

  const getUniqueAuthors = (favorites: FavoriteResponse[]): string[] => {
    const authors = favorites
      .map((fav) => fav.author)
      .filter((author) => author !== null);
    return [...new Set(authors)];
  };
  const uniqueAuthors = getUniqueAuthors(favorites);

  // function to filter list depending on both select
  const getFilteredFavorites = (): FavoriteResponse[] => {
    return favorites.filter((favorite) => {
      const categoryMatches =
        categoriesValue === "all" ||
        categoriesValue === null ||
        favorite.category === categoriesValue;
      const authorMatches =
        authorsValue === "all" ||
        authorsValue === null ||
        favorite.author === authorsValue;
      return categoryMatches && authorMatches;
    });
  };

  const filteredFavorites = getFilteredFavorites();

  if (loading) {
    return <SkeletonCardFavorites />;
  }

  return (
    <div className="space-y-4">
      {favorites.length === 0 ? (
        <div>
          <span className="text-xl text-muted-foreground">
            Pas livres ajouté aux favoris !
          </span>
        </div>
      ) : (
        <div className="flex space-x-3">
          <Select onValueChange={handleCategoriesValue}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Trier par genres" />
            </SelectTrigger>
            <SelectContent className="max-w-[180px]">
              <SelectGroup>
                <SelectItem value="all">Tous les genres</SelectItem>
                <div className="py-3">
                  <hr />
                </div>
                {uniqueCategories.map((category) => (
                  <SelectItem
                    key={category} // Added key for each category
                    className="line-clamp-2 items-center max-h-[50px]"
                    value={category}
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
          <Select onValueChange={handleAuthorsValue}>
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Trier par auteurs" />
            </SelectTrigger>
            <SelectContent className="max-w-[180px]">
              <SelectGroup>
                <SelectItem value="all">Tous les auteurs</SelectItem>
                <div className="py-3">
                  <hr />
                </div>
                {uniqueAuthors.map((author) => (
                  <SelectItem
                    key={author} // Added key for each author
                    className="line-clamp-2 items-center max-h-[50px]"
                    value={author}
                  >
                    {author}
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      )}
      {filteredFavorites.map((item) => (
        <CardFavoriteTemplateList
          key={item.bookId}
          favorites={item}
          userId={userId}
        />
      ))}
    </div>
  );
};

export default FavoriteList;
