import React from "react";
import Header from "components/Header";
import UserList from "components/UserList";
import Navigation from "components/Navigation";
import SearchForm from "components/SearchForm";
import Spinner from "components/Spinner";

const Search = () => {
  return (
    <div className="search">
      <Header />
      <SearchForm />
      <Spinner />
      <Navigation />
      <UserList />
    </div>
  );
};

export default Search;
