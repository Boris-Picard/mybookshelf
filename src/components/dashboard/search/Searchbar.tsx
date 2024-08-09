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

const SearchBar = ({ userId }: { userId: string }) => {
  const [searchResult, setSearchResult] = useState<string | undefined>();
  const [selectValue, setSelectValue] = useState<string | null>(null);
  const { books, errorMessage } = useSearchBarBooks(searchResult, selectValue);

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
          <SelectTrigger className="w-full border-r-0 bg-transparent shadow-none">
            <SelectValue placeholder="Faire une recherche ciblé" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="author">Par Auteur</SelectItem>
            <SelectItem value="title">Par Titre</SelectItem>
            <SelectItem value="publisher">Par Editeur</SelectItem>
            <SelectItem value="subject">Par sujet spécifique</SelectItem>
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
