import { useState } from "react";
import { searchContext } from "./searchContext";

const SearchProvider = ({children}) => {
    const [search, setSearch] = useState("");
  return (
    <searchContext.Provider value={{search,setSearch}}>
      {children}
    </searchContext.Provider>
  )
}

export default SearchProvider
