import React, { useEffect, useState, useContext } from "react";
import { useAsync } from "hooks/useAsync";
import { apiClient } from "services/apiClient";
import { UserSearchContext } from "context/userSearchContext";

const SearchForm = () => {
  const { setResults } = useContext(UserSearchContext);
  const { data, error, run, isLoading, isError, isSuccess } = useAsync();
  const [query, setQuery] = useState("");
  const [queried, setQueried] = useState(false);

  const onInputChange = (event) => {
    event.preventDefault();
    setQueried(true);
    setQuery(event.target.value);
  };

  useEffect(() => {
    if (!queried) {
      return;
    }

    run(
      apiClient(
        `search/users?q=${encodeURIComponent(query)}&per_page=20&page=${1}`
      )
    );
    setQueried(false);
  }, [query, queried, run]);

  useEffect(() => {
    if (data) {
      setResults(data);
    }
  }, [data, setResults]);

  useEffect(() => {
    console.log(
      "🚀 ~ file: SearchForm.js ~ line 33 ~ SearchForm ~ error",
      error
    );
  }, [error]);

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
      {isError ? (
        <div>
          <p>There was an error:</p>
          <pre>{error.message}</pre>
        </div>
      ) : null}
    </div>
  );
};

export default SearchForm;
