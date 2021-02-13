import React, { createContext, useState } from "react";

export const UserSearchContext = createContext();
UserSearchContext.displayName = "UserSearchContext";

export const UserSearchProvider = ({ children }) => {
  const [users, setUsers] = useState([]);

  return (
    <UserSearchContext.Provider
      value={{
        users,
        setUsers,
      }}
    >
      {children}
    </UserSearchContext.Provider>
  );
};
