import React, { useContext } from "react";
import { UserSearchContext } from "context/userSearchContext";

const SearchForm = () => {
  const { users } = useContext(UserSearchContext);
  const onInputChange = (event) => {
    event.preventDefault();
  };

  return (
    <div className="search-form">
      <input
        type="text"
        name="input"
        autoComplete="off"
        onChange={onInputChange}
      />
    </div>
  );
};

export default SearchForm;
