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

const CardCategoriesTemplateList = ({ books }: { books: Books }) => {

  return (
    <>
      <h1 className="text-xl"></h1>
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
        <div className="flex items-center w-full ml-4">
          <CardHeader className="flex  space-y-0 py-3 px-3">
            <div>
              <div className="flex justify-between">
                <CardTitle className="text-lg sm:text-xl font-semibold text-balance">
                  <span>{books.title}</span>
                </CardTitle>
                <div className="flex justify-end items-center">
                  {books.amount && (
                    <span className="font-semibold mr-3">
                      {books.amount} EUR
                    </span>
                  )}
                  {/* <FavoriteButton
                    fromFavorite={books}
                    isFavorite={[books]}
                  /> */}
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
                    {/* <Ratings ratings={books.averageRating} /> */}
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
    </>
  );
};

export default CardCategoriesTemplateList;
