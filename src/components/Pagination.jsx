const Pagination = ({ page, rowsPerPage, totalCount, onPageChange }) => {
  const totalPages = Math.ceil(totalCount / rowsPerPage) || 1;
  const start = totalCount === 0 ? 0 : page * rowsPerPage + 1;
  const end = Math.min((page + 1) * rowsPerPage, totalCount);

  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  const handlePrev = () => {
    if (canPrev) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (canNext) onPageChange(page + 1);
  };

  return (
    <div className="pagination-container">
      <span className="pagination-info">
        {start}-{end} of {totalCount}
      </span>

      <button
        className="pagination-btn"
        disabled={!canPrev}
        onClick={handlePrev}
      >
        ‹
      </button>
      <button
        className="pagination-btn"
        disabled={!canNext}
        onClick={handleNext}
      >
        ›
      </button>
    </div>
  );
};

export default Pagination;
