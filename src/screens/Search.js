import React, { useEffect, useState, useContext, useCallback } from "react";

import Header from "components/Header";
import UserList from "components/UserList";
import Navigation from "components/Navigation";
import SearchForm from "components/SearchForm";
import Spinner from "components/Spinner";
import ErrorCard from "components/ErrorCard";

import { useAsync } from "hooks/useAsync";
import { useDebounce } from "hooks/useDebounce";
import { apiClient } from "services/apiClient";
import { UserSearchContext } from "context/userSearchContext";

const Search = () => {
  const { setResults } = useContext(UserSearchContext);
  const { data, error, run, isLoading, isError, isSuccess } = useAsync();
  const [query, setQuery] = useState("");
  const [queried, setQueried] = useState(false);
  // Debounce search term to only keep the latest value
  // if searchTerm has not been updated within last 500ms.
  // The goal is to only have the API call fire when user stops typing
  // so that we aren't hitting our API rapidly.
  // Github API Rate Limit of 10 request/minute
  // Up to 1000 results per request
  const debouncedSearchTerm = useDebounce(query, 500);

  useEffect(
    () => {
      if (debouncedSearchTerm) {
        console.log(
          "🚀 ~ file: Search.js ~ line 31 ~ Search ~ debouncedSearchTerm",
          debouncedSearchTerm
        );
        setQueried(true);
      } else {
        setQueried(false);
      }
    },
    [debouncedSearchTerm] // Only call effect if debounced search term changes
  );

  useEffect(() => {
    if (!isLoading) {
      setQueried(false);
    }
  }, [isLoading]);

  useEffect(() => {
    if (!queried || !query) {
      return;
    }

    run(
      apiClient(
        `search/users?q=${encodeURIComponent(query)}&per_page=1000&page=${1}`
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
      <SearchForm setQuery={(value) => setQuery(value)} searching={isLoading} />
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
