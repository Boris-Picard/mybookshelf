import { Books } from "@/types/Books";
import Image from "next/image";
import Link from "next/link";

const TemplateSearchList = ({
  books,
  userId,
}: {
  books: Books;
  userId: string;
}) => {
  console.log(books);
  return (
    <div className="flex p-3 items-center bg-slate-50 dark:bg-zinc-950">
      <Link
        href={`/dashboard/book/${userId}/${books.id}`}
        className="flex hover:dark:bg-zinc-800 hover:bg-slate-200 w-full py-3 rounded-md"
      >
        <div className="flex-shrink-0">
          <Image
            src={books.thumbnail ?? "/assets/default-book.png"}
            alt={books.title}
            width={100}
            height={100}
            className="object-cover rounded-md"
          />
        </div>
        <div className="flex flex-col flex-grow space-y-3 px-6">
          <span className="text-balance font-semibold line-clamp-1">
            {books.title}
          </span>
          <span className="text-muted-foreground">{books.authors}</span>
          <span className="text-pretty line-clamp-2">{books.description}</span>
        </div>
      </Link>
    </div>
  );
};

export default TemplateSearchList;
