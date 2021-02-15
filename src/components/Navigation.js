import React, { useContext } from "react";
import PropTypes from "prop-types";
import { SearchContext } from "context/searchContext";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Navigation = ({ previous, next }) => {
  const { count } = useContext(SearchContext);

  const goBack = () => {
    previous();
  };

  const goForward = () => {
    next();
  };

  return (
    <div className="navigation-bar">
      <div className="controls">
        <span className="back" onClick={goBack}>
          <IoChevronBack />
        </span>
        <span className="forward" onClick={goForward}>
          <IoChevronForward />
        </span>
        <span className="count">{count}</span>
      </div>
    </div>
  );
};

Navigation.defaultProps = {
  previous: () => {},
  next: () => {},
};

Navigation.propTypes = {
  previous: PropTypes.func,
  next: PropTypes.func,
};

export default Navigation;
