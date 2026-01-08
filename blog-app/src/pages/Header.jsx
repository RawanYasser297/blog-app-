import { NavLink } from "react-router-dom";
import { Search } from 'lucide-react';


const Header = () => {
  return (
    <header className="border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2 text-xl font-bold">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white">
            B
          </span>
          <span>Blog</span>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-8 text-sm font-medium text-gray-600">
          <NavLink to="/" className="text-gray-900">
            Home
          </NavLink>
        </nav>

        {/* Search */}
        <div className="relative hidden sm:block">
          <input
            type="text"
            placeholder="Search"
            className="w-41.5 rounded-[5px] bg-[#F4F4F5] py-2 pl-3.5 pr-3 text-sm  focus:outline-none"
          />
          <Search
            size={16}
            className="absolute left-32 top-1/2 -translate-y-1/2 text-gray-400"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
