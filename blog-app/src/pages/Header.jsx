import { NavLink } from "react-router-dom";
import SearchInput from "../components/SearchInput";

const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
            B
          </span>
          <span className="hidden md:flex">Blog</span>
        </div>

        
         
         <SearchInput />
     
      </div>
    </header>
  );
};

export default Header;
