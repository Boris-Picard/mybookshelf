import { Books } from "@/types/Books";
import Image from "next/image";

const TemplateSearchList = ({ books }: { books: Books }) => {
  console.log(books);
  return (
    <div className="flex p-3 items-center bg-slate-50 dark:bg-zinc-900">
      <div className="flex-shrink-0">
        <Image
          src={books.thumbnail}
          alt={books.title}
          width={100}
          height={100}
          className="object-cover"
        />
      </div>
      <div className="flex flex-col flex-grow space-y-3 px-6">
        <span className="text-balance font-semibold">{books.title}</span>
        <span>{books.authors}</span>
        <span className="text-pretty line-clamp-2">{books.description}</span>
      </div>
      <hr />
    </div>
  );
};

export default TemplateSearchList;
