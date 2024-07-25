import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Books } from "@/types/Books";
import Image from "next/image";

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
          alt="test"
          width={180}
          height={180}
          className=" object-cover rounded-tl-xl rounded-bl-xl"
        />
      </div>
      <div className="flex flex-col flex-grow ml-4 items-center justify-center">
        <CardHeader className="flex flex-row space-y-0 gap-2 items-start">
          <div className="grid gap-1 flex-grow">
            <CardTitle className="text-lg sm:text-xl font-semibold">
              {books.title}
            </CardTitle>
            <small className="text-muted-foreground">by {books.authors}</small>
            <CardDescription className="text-sm sm:text-base text-pretty line-clamp-2 mt-4">
              {books.description}
            </CardDescription>
            <div className="flex-row flex">
              <CardContent className="p-0">
                {books.ratingsCount && (
                  <p className="text-sm sm:text-base">
                    {books.ratingsCount} ratings
                  </p>
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
