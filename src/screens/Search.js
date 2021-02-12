import React, { useEffect, useState } from "react";
import axios from "axios";
import SearchForm from "components/SearchForm";

const Search = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    setQuery("jqn");
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method: "get",
        url: `https://api.github.com/search/users?q=${query}&per_page=20&page=2`,
        headers: { Accept: "application/vnd.github.v3+json" },
      });
      console.log(
        "🚀 ~ file: Search.js ~ line 13 ~ fetchData ~ result",
        result
      );
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
