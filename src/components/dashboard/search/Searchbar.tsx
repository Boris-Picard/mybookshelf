import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import useSearchBarBooks from "@/hooks/useSearchBarBooks";
import TemplateSearchList from "./TemplateSearchList";

const SearchBar = () => {
  const [searchResult, setSearchResult] = useState<string | undefined>();
  const { books, errorMessage } = useSearchBarBooks(searchResult);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchResult(value);
  };

  return (
    <div className="relative ml-auto flex-1">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
      <Input
        onChange={(e) => handleChange(e)}
        type="search"
        value={searchResult}
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8 ml-auto"
      />
      {books && (
        <div className="overflow-auto max-h-[875px] absolute w-full rounded-md">
          {books.map((item) => {
            return <TemplateSearchList books={item} />;
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
