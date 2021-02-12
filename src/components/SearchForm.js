import React from "react";

const SearchForm = () => {
  function onInputChange(event) {
    event.preventDefault();
  }

  return (
    <div className="search-form">
      <input
        type="text"
        name="input"
        value={"jqn"}
        autoComplete="off"
        onChange={onInputChange}
      />
    </div>
  );
};

export default SearchForm;
