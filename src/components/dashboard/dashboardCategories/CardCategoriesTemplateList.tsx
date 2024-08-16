import { Books } from "@/types/Books";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Ratings from "@/components/dashboard/Ratings";
import FavoriteButtonClient from "@/components/dashboard/dashboardHome/FavoriteButton";
import { FavoriteResponse } from "@/types/FavoriteBook";

interface CardCategoriesProps {
  books: Books;
  favorites: FavoriteResponse[];
  userId?: string;
}

const CardCategoriesTemplateList: React.FC<CardCategoriesProps> = ({
  books,
  favorites,
  userId,
}) => {
  return (
    <>
      <Card className="w-full flex pl-0 py-0 flex-col sm:flex-row">
        <div className="flex-shrink-0">
          <Image
            src={books.thumbnail ?? "/default-book.png"}
            alt={books.title}
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
                <CardTitle className="text-lg sm:text-xl font-semibold text-balance line-clamp-1 sm:line-clamp-3 md:line-clamp-none">
                  <span>{books.title}</span>
                </CardTitle>
                <div className="flex justify-end items-center">
                  {books.amount && (
                    <span className="font-semibold mr-3">
                      {books.amount} EUR
                    </span>
                  )}
                  <FavoriteButtonClient book={books} isFavorite={favorites} />
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
              {books.description && (
                <CardDescription className="text-sm sm:text-base text-pretty line-clamp-3 mt-4">
                  {books.description}
                </CardDescription>
              )}
              <div className="flex flex-row mt-4 text-sm sm:text-base text-muted-foreground">
                <CardContent className="p-0 flex items-center w-full">
                  {books.ratingsCount && (
                    <div className="flex items-center">
                      <span className="text-muted-foreground mr-5">
                        {books.ratingsCount} ratings
                      </span>
                    </div>
                  )}
                  <Link href={`/dashboard/book/${userId}/${books.id}`}>
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
                        src="/play-books.svg"
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
    </>
  );
};

export default CardCategoriesTemplateList;
