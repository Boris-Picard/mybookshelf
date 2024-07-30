"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Ratings from "@/components/dashboard/Ratings";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import FavoriteButton from "@/components/dashboard/dashboardHome/FavoriteButton";
import { FavoriteResponse } from "@/types/FavoriteBook";

const CardFavoriteTemplateList: React.FC<{ favorites: FavoriteResponse }> = ({
  favorites,
}) => {
  return (
    <Card className="w-full flex px-4 pl-0 py-0">
      <div className="flex-shrink-0">
        <Image
          src={favorites.thumbnail ?? "/assets/default-book.png"}
          alt={favorites.name}
          width={180}
          height={180}
          priority
          className="object-cover rounded-tl-xl rounded-bl-xl h-auto w-auto"
        />
      </div>
      <div className="flex items-center w-full ml-4">
        <CardHeader className="flex  space-y-0 py-0 px-3">
          <div>
            <div className="flex justify-between">
              <CardTitle className="text-lg sm:text-xl font-semibold text-balance">
                <span>{favorites.name}</span>
              </CardTitle>
              <div className="flex justify-end items-center">
                <span className="font-semibold mr-3">
                  {favorites.price} EUR
                </span>
                <FavoriteButton book={favorites} isFavorite={[favorites]} />
              </div>
            </div>
            <div className="flex flex-row">
              {favorites.author && (
                <small className="text-muted-foreground">
                  by {favorites.author} -
                </small>
              )}
              {favorites.date && (
                <small className="text-muted-foreground ml-1">
                  Date de parution :{" "}
                  {new Date(favorites.date).toLocaleDateString()}
                </small>
              )}
              {favorites.category && (
                <small className="text-muted-foreground font-semibold ml-auto mr-1">
                  {favorites.category}
                </small>
              )}
            </div>
            <CardDescription className="text-sm sm:text-base text-pretty line-clamp-2 mt-4">
              {favorites.description}
            </CardDescription>
            <div className="flex flex-row mt-4 justify-between text-sm sm:text-base text-muted-foreground">
              <CardContent className="p-0 w-full flex items-center">
                <Link href="/">
                  <Button variant="link" className="pl-0">
                    Voir plus
                  </Button>
                </Link>
                {favorites.ratingsCount && (
                  <div className="flex mx-auto">
                    <span className="text-muted-foreground w-full">
                      {favorites.ratingsCount} ratings
                    </span>
                    <Ratings ratings={favorites.averageRating} />
                    <span className="text-muted-foreground ml-2">
                      {favorites.averageRating}
                    </span>
                  </div>
                )}
                {favorites.link && (
                  <Link
                    href={favorites.link}
                    className="ml-auto"
                    target="_blank"
                  >
                    <Image
                      src="/assets/play-books.svg"
                      width={24}
                      height={24}
                      alt="play-books"
                    />
                  </Link>
                )}
              </CardContent>
            </div>
          </div>
        </CardHeader>
      </div>
    </Card>
  );
};

export default CardFavoriteTemplateList;
