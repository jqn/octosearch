import React, { useContext } from "react";
import PropTypes from "prop-types";
import { SearchContext } from "context/searchContext";
// import { usePagination } from "hooks/usePagination";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Navigation = ({ previous, next }) => {
  const { resultCount } = useContext(SearchContext);
  // const { next, previous } = usePagination(users, 20);

  const goBack = () => {
    previous();
  };

  const goForward = () => {
    next();
  };

  return (
    <div className="navigation-bar">
      {resultCount ? (
        <div className="controls">
          <span className="back" onClick={goBack}>
            <IoChevronBack />
          </span>
          <span className="forward" onClick={goForward}>
            <IoChevronForward />
          </span>
          <span className="count">{resultCount}</span>
        </div>
      ) : (
        <div />
      )}
    </div>
  );
};

Navigation.defaultProps = {
  // setPage: 1,
  previous: () => {},
  next: () => {},
};

Navigation.propTypes = {
  // setPage: PropTypes.number,
  previous: PropTypes.func,
  next: PropTypes.func,
};

export default Navigation;
