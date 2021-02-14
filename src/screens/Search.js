import React, { useEffect, useState, useContext } from "react";

import Header from "components/Header";
import UserList from "components/UserList";
import Navigation from "components/Navigation";
import SearchForm from "components/SearchForm";
import Spinner from "components/Spinner";
import ErrorCard from "components/ErrorCard";

import { useAsync } from "hooks/useAsync";
import { apiClient } from "services/apiClient";
import { UserSearchContext } from "context/userSearchContext";

const Search = () => {
  const { setResults } = useContext(UserSearchContext);
  const { data, error, run, isLoading, isError, isSuccess } = useAsync();
  const [query, setQuery] = useState("");
  const [queried, setQueried] = useState(false);

  const onQueryChange = (value) => {
    setQueried(true);
    setQuery(value);
  };

  useEffect(() => {
    if (!queried || !query) {
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
    if (!query) {
      setResults({ items: [], total_count: 0 });
    }
  }, [query, setResults]);

  useEffect(() => {
    if (data) {
      setResults(data);
    }
  }, [data, setResults]);

  useEffect(() => {
    if (error) {
      console.log("🚀 ~ file: Search.js ~ line 51 ~ useEffect ~ error", error);
      setResults({ items: [], total_count: 0 });
    }
  }, [error, setResults]);

  return (
    <div className="search">
      <Header />
      <SearchForm setQuery={(value) => onQueryChange(value)} />
      {isLoading ? <Spinner /> : null}
      {isError ? <ErrorCard error={error} /> : null}
      {isSuccess ? (
        <>
          <Navigation />
          <UserList />
        </>
      ) : null}
    </div>
  );
};

export default Search;
