import React from "react";
import PropTypes from "prop-types";
import { useCallback } from "react";

const SearchForm = ({ setQuery }) => {
  const onInputChange = useCallback(
    (event) => {
      event.preventDefault();
      setQuery(event.target.value);
    },
    [setQuery]
  );

  return (
    <div className="search-form">
      https://github.com<span className="slash">/</span>
      <input
        autoFocus
        type="text"
        name="input"
        autoComplete="off"
        placeholder="user"
        onChange={onInputChange}
      />
    </div>
  );
};

SearchForm.defaultProps = { setQuery: () => {} };

SearchForm.propTypes = { setQuery: PropTypes.func };

export default SearchForm;
