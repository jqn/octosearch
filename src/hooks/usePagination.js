import { useState } from "react";

export const usePagination = (data = [], itemsPerPage = 20) => {
  const [currentPage, setCurrentPage] = useState(1);
  console.log(
    "🚀 ~ file: usePagination.js ~ line 5 ~ usePagination ~ currentPage",
    currentPage
  );

  const maxPage = Math.ceil(data.length / itemsPerPage);
  // Set current data to display
  const currentData = () => {
    const begin = (currentPage - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return data.slice(begin, end);
  };
  console.log(
    "🚀 ~ file: usePagination.js ~ line 17 ~ currentData ~ currentData",
    currentData()
  );

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
    setCurrentPage((currentPage) => Math.min(pageNumber, maxPage));
  };

  return { next, prev, jump, currentData, currentPage, maxPage };
};
