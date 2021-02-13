import React, { createContext, useState } from "react";

export const UserSearchContext = createContext();
UserSearchContext.displayName = "UserSearchContext";

export const UserSearchProvider = ({ children }) => {
  const [users, setUsers] = useState([]);
  const [resultCount, setResultCount] = useState(0);
  const [page, setPage] = useState(1);

  return (
    <UserSearchContext.Provider
      value={{
        users,
        setUsers,
        resultCount,
        setResultCount,
        page,
        setPage,
      }}
    >
      {children}
    </UserSearchContext.Provider>
  );
};
