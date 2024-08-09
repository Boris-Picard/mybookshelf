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

const SearchBar = ({ userId }: { userId: string }) => {
  const [searchResult, setSearchResult] = useState<string | undefined>();
  const [selectValue, setSelectValue] = useState<string | null>(null);
  const { books, errorMessage } = useSearchBarBooks(searchResult, selectValue);

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
      title: "Par Editeur",
    },
    {
      value: "subject",
      title: "Par sujet spécifique",
    },
  ];

  const handleSelectChange = (value: string) => {
    setSelectValue(value);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchResult(value);
  };

  return (
    <div className="relative ml-auto flex-1">
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
        <Select onValueChange={handleSelectChange}>
          <SelectTrigger className="w-full border-0 bg-transparent shadow-none bg-zinc-800 text-slate-50 dark:bg-slate-50 dark:text-zinc-800">
            <SelectValue placeholder="Faire une recherche ciblé" />
          </SelectTrigger>
          <SelectContent className="bg-zinc-800 text-slate-50 dark:bg-slate-50 dark:text-zinc-800">
            <SelectItem value="all">Pas de type prédéfini</SelectItem>
            <div className="py-3">
              <hr />
            </div>
            {selectValueTitle.map((item) => {
              return <SelectItem value={item.value}>{item.title}</SelectItem>;
            })}
          </SelectContent>
        </Select>
      </div>
      <Search className="absolute left-2.5 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
      <Input
        onChange={(e) => handleChange(e)}
        type="search"
        value={searchResult}
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8"
      />
      {books && (
        <div className="overflow-auto max-h-[875px] absolute w-full rounded-md mt-1">
          {books.map((item) => {
            return <TemplateSearchList userId={userId} books={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
