import React, { useContext } from "react";
import PropTypes from "prop-types";
import { SearchContext } from "context/searchContext";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Navigation = ({ previous, next, jump }) => {
  const { count } = useContext(SearchContext);

  const jumpTo = (page) => {
    console.log("🚀 ~ file: Navigation.js ~ line 10 ~ jumpTo ~ page", page);
    jump(page);
  };

  const goBack = () => {
    previous();
  };

  const goForward = () => {
    next();
  };

  return (
    <div className="navigation-bar">
      {count ? (
        <div className="controls">
          <span className="first" onClick={() => jumpTo(1)}>
            First
          </span>
          <span className="last" onClick={() => jumpTo("last")}>
            Last
          </span>
          <span className="back" onClick={goBack}>
            <IoChevronBack />
          </span>
          <span className="forward" onClick={goForward}>
            <IoChevronForward />
          </span>
          <span className="count">{count}</span>
        </div>
      ) : (
        <div className="separator" />
      )}
    </div>
  );
};

Navigation.defaultProps = {
  previous: () => {},
  next: () => {},
  jump: () => {},
};

Navigation.propTypes = {
  previous: PropTypes.func,
  next: PropTypes.func,
  jump: PropTypes.func,
};

export default Navigation;
