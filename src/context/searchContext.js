import React, { createContext, useState, useCallback } from "react";

export const SearchContext = createContext();
SearchContext.displayName = "SearchContext";

export const SearchProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState([]);

  const setResults = useCallback((results) => {
    setData(results.items);
  }, []);

  return (
    <SearchContext.Provider
      value={{
        data,
        setResults,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};
