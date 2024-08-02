"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Books } from "@/types/Books";
import Image from "next/image";
import Ratings from "@/components/dashboard/Ratings";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import FavoriteButton from "@/components/dashboard/dashboardHome/FavoriteButton";
import { FavoriteResponse } from "@/types/FavoriteBook";

interface CardListProps {
  books: Books;
  favorites: FavoriteResponse[] | null | string;
}

const CardList: React.FC<CardListProps> = ({ books, favorites }) => {
  return (
    <Card className="w-full flex px-4 pl-0 py-0">
      <div className="flex-shrink-0">
        <Image
          src={books.thumbnail ?? "/assets/default-book.png"}
          alt={books.title}
          width={150}
          height={150}
          priority
          className="object-cover rounded-tl-xl rounded-bl-xl h-full"
        />
      </div>
      <div className="flex flex-col w-full ml-4 flex-grow">
        <CardHeader className="flex px-3 min-h-full">
          <div className="flex-grow justify-between flex flex-col">
            <div className="flex justify-between">
              <CardTitle className="text-lg sm:text-xl font-semibold text-balance">
                <span>{books.title}</span>
              </CardTitle>
              <div className="flex justify-end items-center">
                <span className="font-semibold mr-3">
                  {books.amount} {books.currencyCode}
                </span>
                <FavoriteButton book={books} isFavorite={favorites} />
              </div>
            </div>
            <div className="flex flex-col space-y-1">
              {books.authors && (
                <small className="text-muted-foreground">
                  By {books.authors}
                </small>
              )}
              {books.publishedDate && (
                <small className="text-muted-foreground">
                  Date de parution :{" "}
                  {new Date(books.publishedDate).toLocaleDateString()}
                </small>
              )}
              {books.categories && (
                <small className="text-muted-foreground">
                  {books.categories}
                </small>
              )}
            </div>
            {books.averageRating && (
              <div className="flex flex-row items-center mt-3">
                <small>
                  <Ratings ratings={books.averageRating} />
                </small>
                <span className="text-muted-foreground ml-2">
                  {books.averageRating}
                </span>
              </div>
            )}
            <CardDescription className="text-sm sm:text-base text-pretty line-clamp-2 mt-4">
              {books.description}
            </CardDescription>
            <div className="flex flex-row mt-4 text-sm sm:text-base text-muted-foreground">
              <CardContent className="p-0 flex items-center w-full">
                {books.ratingsCount && (
                  <div className="flex items-center">
                    <span className="text-muted-foreground mr-5">
                      {books.ratingsCount} ratings
                    </span>
                  </div>
                )}
                <Link href="/">
                  <Button variant="link" className="pl-0">
                    Voir plus
                  </Button>
                </Link>
                {books.webReader && (
                  <Link
                    href={books.webReader}
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

export default CardList;
