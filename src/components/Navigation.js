import React, { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SearchContext } from "context/searchContext";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { MdPlaylistAdd } from "react-icons/md";

const Navigation = ({
  previous,
  next,
  jump,
  currentPage,
  getMore,
  queryPage,
}) => {
  const { count } = useContext(SearchContext);
  const [page, setPage] = useState(1);

  const jumpTo = (value) => {
    jump(value);
  };

  const goBack = () => {
    previous();
  };

  const goForward = () => {
    next();
  };

  const paginateRecords = () => {
    // Prevent queries if records are less than
    // Github results limit
    if (count <= 100) {
      return;
    }
    getMore();
  };

  useEffect(() => {
    if (currentPage === 1 && queryPage >= 2) {
      // Calculate correct page number
      // for jump to first page
      // we always have 5 pages
      // so multiply by query page and remove 4
      setPage(queryPage * 5 - 4);
      return;
    }
    if (currentPage === 5 && queryPage >= 2) {
      // Calculate correct page number
      // for jump to first page
      // we always have 5 pages
      // so multiply by query page
      setPage(queryPage * 5);
      return;
    }
    if (currentPage >= 2 && queryPage >= 2) {
      // We are past the first 100 records
      // calculate the current page
      // when navigating forward
      setPage((prevState) => prevState + 1);
      return;
    }
    if (currentPage <= 5 && queryPage >= 2) {
      // We are past the first 100 records
      // calculate the current page
      // when navigating back
      setPage((prevState) => prevState - 1);
      return;
    }
    // We are in the first 100 records
    // run default action
    setPage(currentPage);
  }, [currentPage, queryPage]);

  return (
    <div className="navigation-bar">
      {count ? (
        <div className="controls">
          <span className="page">{`Page ${page}/${count}`}</span>
          <span className="first" onClick={() => jumpTo("first")}>
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
          {/* <span className="count">{`${searchData.length}`}</span> */}
          <span className="add">
            <MdPlaylistAdd size="1.6em" onClick={paginateRecords} />
          </span>
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
  getMore: () => {},
  currentPage: 1,
  maxPage: 5,
  queryPage: 1,
};

Navigation.propTypes = {
  previous: PropTypes.func,
  next: PropTypes.func,
  jump: PropTypes.func,
  getMore: PropTypes.func,
  currentPage: PropTypes.number,
  maxPage: PropTypes.number,
  queryPage: PropTypes.number,
};

export default Navigation;
