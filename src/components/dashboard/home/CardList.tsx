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

  const thumbnail = books.thumbnail || "/assets/4TARc7mw.jpg";
  return (
    <Card className="p-6 max-h-[500px]">
      <div className="flex flex-col sm:flex-row items-center">
        <CardHeader className="p-0 sm:pr-6 pb-6 sm:pb-0 w-full h-full">
          <Image
            src={thumbnail}
            alt="test"
            layout="responsive"
            width={500}
            height={500}
            className="rounded-xl"
          />
        </CardHeader>
        <div className="flex flex-col w-full sm:w-auto space-y-3">
          <CardTitle className="text-lg sm:text-xl font-semibold">
            {books.authors}
          </CardTitle>
          <CardDescription className="text-sm sm:text-base text-pretty line-clamp-3">
            {books.description}
          </CardDescription>
          <CardContent>
            <p className="text-sm sm:text-base">Card Content</p>
          </CardContent>
          <CardFooter>
            <p className="text-sm sm:text-base">Card Footer</p>
          </CardFooter>
        </div>
      </div>
    </Card>
  );
};

export default CardList;
