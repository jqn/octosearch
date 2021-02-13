import React, { useContext } from "react";
import PropTypes from "prop-types";
import { UserSearchContext } from "context/userSearchContext";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";

const Navigation = () => {
  const { resultCount, setPage, page } = useContext(UserSearchContext);

  const goBack = () => {
    setPage(1);
  };

  const goFoward = () => {
    let pageCount = Math.round(resultCount / 20);
    console.log(
      "🚀 ~ file: Navigation.js ~ line 15 ~ goFoward ~ pageCount",
      pageCount
    );
    // setPage(page + 1);
    if (page <= pageCount - 1) {
      // jqnguyen
      setPage(page + 1);
      console.log("page", page);
    } else {
      console.log("done");
    }
  };

  return (
    <div className="navigation-bar">
      {resultCount ? (
        <div className="controls">
          <span className="back" onClick={goBack}>
            <IoChevronBack />
          </span>
          <span className="foward" onClick={goFoward}>
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

Navigation.defaultProps = {};

Navigation.propTypes = {};

export default Navigation;
