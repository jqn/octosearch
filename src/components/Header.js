import React from "react";
import { GiOctopus } from "react-icons/gi";

const Header = () => {
  return (
    <header className="App-header">
      <h3>
        OctoSearch
        <span className="header-icon">
          <GiOctopus />
        </span>
        <span className="action-call">Give me some searches!</span>
      </h3>
    </header>
  );
};

export default Header;
