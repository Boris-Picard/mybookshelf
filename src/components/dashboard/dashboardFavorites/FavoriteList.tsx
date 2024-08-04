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
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FavoriteResponse } from "@/types/FavoriteBook";

const FavoriteList = ({ userId }: { bookId?: string; userId: string }) => {
  const { favorites, addFavoriteBook } = useFavorites();
  const [categoriesValue, setCategoriesValue] = useState<FavoriteResponse[]>();

  useEffect(() => {
    const fetchFavorites = async () => {
      try {
        const response = await getFavorites();
        if (typeof response !== "string") {
          response.map((item) => addFavoriteBook(item));
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchFavorites();
  }, []);

  const handleCategoriesValue = (value: string) => {
    if (value === "all") {
      return setCategoriesValue(favorites);
    }
    const filterFavorites = favorites.filter(
      ({ category }) => value === category
    );
    setCategoriesValue(filterFavorites);
  };

  if (favorites.length === 0) {
    <div>
      <span className="text-xl text-muted-foreground">
        Pas livres ajouté aux favoris !
      </span>
    </div>;
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-3">
        <Select onValueChange={handleCategoriesValue}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Trier par genres" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="all">Tous les genres</SelectItem>
              {favorites.map((item) => {
                if (item.category) {
                  return (
                    <SelectItem value={item.category}>
                      {item.category}
                    </SelectItem>
                  );
                }
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Trier par auteurs" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {favorites.map(({ author }) => {
                if (author) {
                  return <SelectItem value={author}>{author}</SelectItem>;
                }
              })}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      {categoriesValue
        ? categoriesValue.map((item) => {
            return (
              <CardFavoriteTemplateList
                key={item.bookId}
                favorites={item}
                userId={userId}
              />
            );
          })
        : favorites.map((item) => {
            return (
              <CardFavoriteTemplateList
                key={item.bookId}
                favorites={item}
                userId={userId}
              />
            );
          })}
    </div>
  );
};

export default FavoriteList;
