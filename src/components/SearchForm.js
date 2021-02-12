import React from "react";

const SearchForm = () => {
  return (
    <form className="search-form">
      <input type="text" name="input" value={""} autoComplete="off" />
    </form>
  );
};

export default SearchForm;
