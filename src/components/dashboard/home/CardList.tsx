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

import pdf from "/assets/pdf.svg";

interface CardListProps {
  books: Books;
}

const CardList: React.FC<CardListProps> = ({ books }) => {
  console.log(books);

  return (
    <Card className="w-full flex p-4 pl-0 py-0">
      <div className="flex-shrink-0">
        <Image
          src={books.thumbnail}
          alt={books.title}
          width={180}
          height={180}
          className=" object-cover rounded-tl-xl rounded-bl-xl"
        />
      </div>
      <div className="flex flex-col flex-grow ml-4 items-center justify-center">
        <CardHeader className="flex flex-row space-y-0 gap-2 items-start">
          <div className="grid gap-1 flex-grow">
            <div className="flex justify-between">
              <CardTitle className="text-lg sm:text-xl font-semibold">
                <span>{books.title}</span>
              </CardTitle>
              <span className="font-semibold">
                {books.amount} {books.currencyCode}
              </span>
            </div>
            <small className="text-muted-foreground">by {books.authors}</small>
            <CardDescription className="text-sm sm:text-base text-pretty line-clamp-2 mt-4">
              {books.description}
            </CardDescription>
            <div className="flex flex-row mt-4">
              <CardContent className="p-0">
                {books.ratingsCount && (
                  <div className="text-sm sm:text-base text-muted-foreground flex items-center w-full">
                    <span className="text-muted-foreground w-full">
                      {books.ratingsCount} ratings
                    </span>
                    <Ratings ratings={books.averageRating} />
                    <span className="text-muted-foreground ml-2">
                      {books.averageRating}
                    </span>
                    <Image src={pdf} width={24} height={24} alt="pdf" />
                  </div>
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
