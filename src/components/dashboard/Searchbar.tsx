import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchBar = () => {
  return (
    <div className="relative ml-auto flex-1">
      <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground xl:ml-3 xl:w-full" />
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-background pl-8 xl:w-1/2 ml-auto"
      />
    </div>
  );
};

export default SearchBar;
