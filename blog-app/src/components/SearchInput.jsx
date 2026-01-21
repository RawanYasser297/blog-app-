import { Search } from "lucide-react";
import { useContext } from "react";
import { searchContext } from "../context/searchContext";

const SearchInput = () => {
  const { search, setSearch } =useContext(searchContext)
  return (
    <div className="relative">
      <input
        placeholder="Search by title..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-41.5 rounded-[5px] bg-[#F4F4F5] py-2 pl-3.5 pr-8 text-sm focus:outline-none"
      />
      <Search
        size={16}
        className="absolute left-32 top-1/2 -translate-y-1/2 text-gray-400"
      />
    </div>
  );
};

export default SearchInput;
