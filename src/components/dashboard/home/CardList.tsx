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

import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CardListProps {
  books: Books;
}

const CardList: React.FC<CardListProps> = ({ books }) => {
  return (
    <Card className="w-full flex px-4 pl-0 py-0">
      <div className="flex-shrink-0">
        <Image
          src={books.thumbnail}
          alt={books.title}
          width={180}
          height={180}
          className="object-cover rounded-tl-xl rounded-bl-xl w-auto h-auto"
        />
      </div>
      <div className="flex flex-col flex-grow ml-4 items-center justify-center">
        <CardHeader className="flex flex-row space-y-0 items-start py-0 px-3">
          <div className="grid gap-1 flex-grow">
            <div className="flex justify-between">
              <CardTitle className="text-lg sm:text-xl font-semibold">
                <span>{books.title}</span>
              </CardTitle>
              <div className="flex justify-end">
                <span className="font-semibold mr-3">
                  {books.amount} {books.currencyCode}
                </span>
                <Star />
              </div>
            </div>
            <small className="text-muted-foreground">by {books.authors}</small>
            <CardDescription className="text-sm sm:text-base text-pretty line-clamp-2 mt-4">
              {books.description}
            </CardDescription>
            <div className="flex flex-row mt-4 justify-between text-sm sm:text-base text-muted-foreground">
              <CardContent className="p-0 w-full flex items-center">
                <Link href="/">
                  <Button variant="link" className="pl-0">
                    Voir plus
                  </Button>
                </Link>
                {books.ratingsCount && (
                  <div className="flex mx-auto">
                    <span className="text-muted-foreground w-full">
                      {books.ratingsCount} ratings
                    </span>
                    <Ratings ratings={books.averageRating} />
                    <span className="text-muted-foreground ml-2">
                      {books.averageRating}
                    </span>
                  </div>
                )}
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
