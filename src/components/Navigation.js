import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UserSearchContext } from "context/userSearchContext";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Navigation = () => {
  const { resultCount } = useContext(UserSearchContext);
  return (
    <div className="navigation-bar">
      <span className="back">
        <IoChevronBack />
      </span>
      <span className="foward">
        <IoChevronForward />
      </span>
      <span className="count">{resultCount}</span>
    </div>
  );
};

Navigation.defaultProps = {};

Navigation.propTypes = {};

export default Navigation;
