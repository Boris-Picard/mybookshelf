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

const CardList: React.FC<CardListProps> = ({ books }: CardListProps) => {
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
      <div className="flex flex-col flex-grow ml-4">
        <CardHeader className="flex flex-row space-y-0 items-start gap-2">
          <div className="grid gap-1 flex-grow">
            <CardTitle className="text-lg sm:text-xl font-semibold">
              {books.authors}
            </CardTitle>
            <CardDescription className="text-sm sm:text-base text-pretty line-clamp-2">
              {books.description}
            </CardDescription>

            <CardContent>
              <p className="text-sm sm:text-base">Card Content</p>
            </CardContent>
            <CardFooter>
              <p className="text-sm sm:text-base">Card Footer</p>
            </CardFooter>
          </div>
        </CardHeader>
      </div>
    </Card>
  );
};

export default CardList;
