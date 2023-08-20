import React from "react";
import { Wrapper } from "./Pagination.styles";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  // Generate an array of page numbers
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const renderPageNumbers = () => {
    const lastPage = pageNumbers[pageNumbers.length - 1];

    // Display dots if there are more than 5 pages
    if (totalPages > 3) {
      if (currentPage <= 2) {
        // Display page numbers 1, 2, 3, 4, 5, dots, lastPage
        return (
          <>
            {pageNumbers.slice(0, 3).map((number) => renderPageButton(number))}
            <span className="dots">...</span>
            {renderPageButton(lastPage)}
          </>
        );
      } else if (currentPage >= lastPage - 2) {
        // Display firstPage, dots, lastPage-4, lastPage-3, lastPage-2, lastPage-1, lastPage
        return (
          <>
            {renderPageButton(1)}
            <span className="dots">...</span>
            {pageNumbers
              .slice(lastPage - 4, lastPage + 1)
              .map((number) => renderPageButton(number))}
          </>
        );
      } else {
        // Display firstPage, dots, currentPage-1, currentPage, currentPage+1, dots, lastPage
        const currentPageIndex = currentPage - 1;
        return (
          <>
            {renderPageButton(1)}
            <span className="dots">...</span>
            {pageNumbers
              .slice(currentPageIndex - 1, currentPageIndex + 2)
              .map((number) => renderPageButton(number))}
            <span className="dots">...</span>
            {renderPageButton(lastPage)}
          </>
        );
      }
    } else {
      // Display all page numbers
      return pageNumbers.map((number) => renderPageButton(number));
    }
  };

  const renderPageButton = (number) => (
    <button
      key={number}
      onClick={() => onPageChange(number-1)}
      className={currentPage === number  ? "active" : ""}
    >
      {number}
    </button>
  );

  return <Wrapper>{renderPageNumbers()}</Wrapper>;
};

export default Pagination;
