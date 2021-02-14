import React, { createContext, useState, useCallback } from "react";

export const UserSearchContext = createContext();
UserSearchContext.displayName = "UserSearchContext";

export const UserSearchProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [resultCount, setResultCount] = useState(0);

  const setResults = useCallback((results) => {
    setUsers(results.items);
    setResultCount(results.total_count);
  }, []);

  return (
    <UserSearchContext.Provider
      value={{
        users,
        setResults,
        resultCount,
      }}
    >
      {children}
    </UserSearchContext.Provider>
  );
};
