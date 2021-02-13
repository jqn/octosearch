import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { UserSearchContext } from "context/userSearchContext";

const API_URL = "https://api.github.com";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const { setUsers, setResultCount, page } = useContext(UserSearchContext);

  const onInputChange = (event) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method: "get",
        url: `${API_URL}/search/users?q=${encodeURIComponent(
          query
        )}&per_page=20&page=${page}`,
        headers: { Accept: "application/vnd.github.v3+json" },
      });
      console.log(
        "🚀 ~ file: Search.js ~ line 13 ~ fetchData ~ result",
        result
      );
      const { data, status } = result;
      if (status === 200) {
        const { items, total_count } = data;
        setUsers(items);
        setResultCount(total_count);
        return;
      }
      setUsers([]);
    };

    if (query) {
      fetchData();
      return;
    }
    setUsers([]);
    setResultCount(0);
  }, [query, setUsers, setResultCount, page]);

  return (
    <div className="search-form">
      https://github.com<span className="slash">/</span>
      <input
        autoFocus
        type="text"
        name="input"
        autoComplete="off"
        onChange={onInputChange}
      />
    </div>
  );
};

export default SearchForm;
