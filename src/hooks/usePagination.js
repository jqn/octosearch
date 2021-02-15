import { useState } from "react";

export const usePagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(20);
  const [pageData, setPageData] = useState([]);

  const maxPage = Math.ceil(pageData.length / itemsPerPage);
  // Set current data to display
  const chunkData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return pageData.slice(begin, end);
  };

  const next = () => {
    // Increase the current page by one but stop at max page
    setCurrentPage((currentPage) => Math.min(currentPage + 1, maxPage));
  };

  const prev = () => {
    // Decrease the current page by one but stop at 1
    setCurrentPage((currentPage) => Math.max(currentPage - 1, 1));
  };

  const jump = (page) => {
    // Set current page and stay within limits
    const pageNumber = Math.max(1, page);
    setCurrentPage(() => Math.min(pageNumber, maxPage));
  };

  return {
    next,
    prev,
    jump,
    chunkData,
    currentPage,
    maxPage,
    pageData,
    setPageData,
    setItemsPerPage,
  };
};
