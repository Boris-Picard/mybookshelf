import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import useSearchBooks from "@/hooks/useSearchBooks";

const SearchBar = () => {
  const [searchResult, setSearchResult] = useState<string | undefined>();
  const [slice, setSlice] = useState<number>(3);
  const { books, errorMessage } = useSearchBooks({ slice });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    const value = e.target.value;
    setSearchResult(value);
  };

  return (
    <div className="relative ml-auto flex-1">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground xl:ml-3 xl:w-full" />
      <Input
        onChange={(e) => handleChange(e)}
        type="search"
        value={searchResult}
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8 xl:w-1/2 ml-auto"
      />
      <div className="overflow-auto absolute w-full">
        {books.length > 0 &&
          books.map((item) => {
            return <div className="flex relative">{item.id}</div>;
          })}
      </div>
    </div>
  );
};

export default SearchBar;
