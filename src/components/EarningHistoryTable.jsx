import { useMemo, useState } from "react";
import Pagination from "../components/Pagination";

const ROWS_PER_PAGE = 8;

const EarningHistoryTable = ({ rows }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const filteredRows = useMemo(() => {
    if (!search.trim()) return rows;
    const term = search.toLowerCase();
    return rows.filter((row) => row.productName.toLowerCase().includes(term));
  }, [rows, search]);

  const paginatedRows = useMemo(() => {
    const start = page * ROWS_PER_PAGE;
    return filteredRows.slice(start, start + ROWS_PER_PAGE);
  }, [filteredRows, page]);

  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(0);
  };

  const getStatusClass = (status) =>
    status === "Paid" ? "status-paid" : "status-pending";

  return (
    <div className="referral-table-card">
      <div className="referral-table-header">
        <h3>Earning History</h3>

        <div className="referral-table-search">
          <input
            placeholder="Search here"
            value={search}
            onChange={handleSearchChange}
          />
          <button className="refresh-btn">⟲</button>
        </div>

        <div className="referral-table-actions">
          <button className="icon-btn">⇅</button>
          <button className="icon-btn">⚲</button>
        </div>
      </div>

      <table className="referral-table">
        <thead>
          <tr>
            <th>
              <input type="checkbox" />
            </th>
            <th>S. No.</th>
            <th>Product Name</th>
            <th>Date</th>
            <th>Time</th>
            <th>Coupon/Link</th>
            <th>Commission</th>
            <th>Earning</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {paginatedRows.length === 0 ? (
            <tr>
              <td colSpan={9} style={{ textAlign: "center" }}>
                No data
              </td>
            </tr>
          ) : (
            paginatedRows.map((row, index) => (
              <tr key={row.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{page * ROWS_PER_PAGE + index + 1}.</td>
                <td>
                  <div className="referral-name">
                    <span className="avatar-img-wrapper">
                      <img
                        src={row.image}
                        alt={row.productName}
                        className="avatar-img"
                      />
                    </span>
                    <span>{row.productName}</span>
                    {row.tag && <span className="pill-new">{row.tag}</span>}
                  </div>
                </td>
                <td>{row.date}</td>
                <td>{row.time}</td>
                <td>{row.coupon}</td>
                <td>{row.commission}</td>
                <td>INR {row.earning}</td>
                <td className={getStatusClass(row.status)}>{row.status}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="referral-table-footer">
        <span>Rows per page: {ROWS_PER_PAGE}</span>
        <Pagination
          page={page}
          rowsPerPage={ROWS_PER_PAGE}
          totalCount={filteredRows.length}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default EarningHistoryTable;
