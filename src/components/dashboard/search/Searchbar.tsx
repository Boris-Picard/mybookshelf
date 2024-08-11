import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import useSearchBarBooks from "@/hooks/useSearchBarBooks";
import TemplateSearchList from "@/components/dashboard/search/TemplateSearchList";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SelectProps } from "@/types/SearchSelect";
import { z } from "zod";
import { toast } from "react-toastify";
import { SkeletonSearch } from "@/components/dashboard/search/SkeletonSearch";

const SearchBar = ({ userId }: { userId: string }) => {
  const [searchResult, setSearchResult] = useState<string | undefined>();
  const [selectValue, setSelectValue] = useState<string | null>(null);
  const { books, errorMessage, loading } = useSearchBarBooks(
    searchResult,
    selectValue
  );

  const selectValueTitle: SelectProps[] = [
    {
      value: "author",
      title: "Par Auteur",
    },
    {
      value: "title",
      title: "Par Titre",
    },
    {
      value: "publisher",
      title: "Par Éditeur",
    },
    {
      value: "subject",
      title: "Par Sujet Spécifique",
    },
  ];

  const searchSchema = z.string();

  const handleSelectChange = (value: string) => {
    setSelectValue(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const value = e.target.value;
      searchSchema.parse(value);
      setSearchResult(value);
    } catch (error) {
      if (error instanceof Error) {
        toast.error(error.message);
      } else {
        toast.error("An error occured");
      }
    }
  };

  return (
    <div className="relative ml-auto flex-1">
      <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="w-full border-0 bg-transparent shadow-none bg-zinc-800 text-slate-50 dark:bg-slate-50 dark:text-zinc-800">
            <SelectValue placeholder="Faire une recherche ciblée" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-800 text-slate-50 dark:bg-slate-50 dark:text-zinc-800">
            <SelectItem value="all">Pas de recherche prédéfini</SelectItem>
            <div className="py-3">
              <hr />
            </div>
            {selectValueTitle.map((item) => {
              return (
                <SelectItem key={item.title} value={item.value}>
                  {item.title}
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
      <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        onChange={(e) => handleChange(e)}
        type="search"
        value={searchResult}
        placeholder={`Recherche par ${selectValue || "tous"}`}
        className="w-full rounded-lg bg-background pl-8"
      />
      {books && (
        <div className="overflow-auto max-h-[875px] absolute w-full rounded-md mt-1">
          {loading ? (
            <SkeletonSearch />
          ) : (
            books.map((item) => {
              return (
                <TemplateSearchList
                  key={item.id}
                  userId={userId}
                  books={item}
                />
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
