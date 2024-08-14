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
import React from "react";
import DOMPurify from "dompurify";

interface CardFavoriteProps {
  favorites: FavoriteResponse;
  userId: string;
}

const CardFavoriteTemplateList: React.FC<CardFavoriteProps> = ({
  favorites,
  userId,
}) => {
  
  const cleanDescription = DOMPurify.sanitize(favorites.description || "");

  return (
    <Card className="w-full flex pl-0 py-0 flex-col sm:flex-row">
      <div className="flex-shrink-0">
        <Image
          src={favorites.thumbnail ?? "/assets/default-book.png"}
          alt={favorites.name}
          width={150}
          height={150}
          loading="lazy"
          className="object-cover object-center sm:rounded-tl-xl sm:rounded-bl-xl rounded sm:rounded-none h-60 sm:h-full w-full sm:w-[150px] sm:aspect-auto"
        />
      </div>
      <div className="flex flex-col w-full flex-grow px-4">
        <CardHeader className="flex px-3 min-h-full">
          <div className="flex-grow justify-between flex flex-col">
            <div className="flex justify-between">
              <CardTitle className="text-lg sm:text-xl font-semibold text-balance">
                <span>{favorites.name}</span>
              </CardTitle>
              <div className="flex justify-end items-center w-full sm:w-1/4">
                {favorites.price && (
                  <span className="font-semibold mr-3">
                    {favorites.price} EUR
                  </span>
                )}
                <FavoriteButton
                  fromFavorite={favorites}
                  isFavorite={[favorites]}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              {favorites.author && (
                <small className="text-muted-foreground">
                  By {favorites.author}
                </small>
              )}
              {favorites.date && (
                <small className="text-muted-foreground">
                  Date de parution :{" "}
                  {new Date(favorites.date).toLocaleDateString()}
                </small>
              )}
              {favorites.category && (
                <small className="text-muted-foreground">
                  {favorites.category}
                </small>
              )}
            </div>
            {favorites.averageRating && (
              <div className="flex flex-row items-center mt-3">
                <small>
                  <Ratings ratings={favorites.averageRating} />
                </small>
                <span className="text-muted-foreground ml-2">
                  {favorites.averageRating}
                </span>
              </div>
            )}
            {favorites.description && (
              <CardDescription
                className="text-sm sm:text-base text-pretty line-clamp-3 mt-4"
                dangerouslySetInnerHTML={{ __html: cleanDescription }}
              ></CardDescription>
            )}
            <div className="flex flex-row mt-4 text-sm sm:text-base text-muted-foreground">
              <CardContent className="p-0 flex items-center w-full">
                {favorites.ratingsCount && (
                  <div className="flex items-center">
                    <span className="text-muted-foreground mr-5">
                      {favorites.ratingsCount} ratings
                    </span>
                  </div>
                )}
                <Link href={`/dashboard/book/${userId}/${favorites.bookId}`}>
                  <Button variant="link" className="pl-0">
                    Voir plus
                  </Button>
                </Link>
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
