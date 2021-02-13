import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import SearchForm from "components/SearchForm";
import { UserSearchContext } from "context/userSearchContext";

const Search = () => {
  const [query, setQuery] = useState("");
  const { setUsers } = useContext(UserSearchContext);

  useEffect(() => {
    setQuery("jqn");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method: "get",
        url: `https://api.github.com/search/users?q=${query}&per_page=20&page=1`,
        headers: { Accept: "application/vnd.github.v3+json" },
      });
      console.log(
        "🚀 ~ file: Search.js ~ line 13 ~ fetchData ~ result",
        result
      );
      const users = result.data.items;
      setUsers(users);
    };

    if (query) {
      fetchData();
    }
  }, [query]);

  return (
    <div className="">
      <SearchForm />
    </div>
  );
};

export default Search;
