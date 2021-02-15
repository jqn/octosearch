import React, { createContext, useState, useCallback } from "react";

export const SearchContext = createContext();
SearchContext.displayName = "SearchContext";

export const SearchProvider = ({ children }) => {
  const [searchData, setSearchData] = useState([]);
  const [count, setCount] = useState(0);

  const setResults = useCallback((results) => {
    setSearchData(results.items);
    setCount(results.total_count);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        searchData,
        count,
        setResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
