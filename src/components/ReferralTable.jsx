import { useMemo, useState } from "react";
import Pagination from "./Pagination";

const ReferralTable = ({ rows }) => {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);
  const rowsPerPage = 8;

  const filteredRows = useMemo(() => {
    if (!search.trim()) return rows;
    const term = search.toLowerCase();
    return rows.filter((row) => row.productName.toLowerCase().includes(term));
  }, [rows, search]);

  const paginatedRows = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredRows.slice(start, start + rowsPerPage);
  }, [filteredRows, page]);

  // reset to first page when search changes
  const handleSearchChange = (e) => {
    setSearch(e.target.value);
    setPage(0);
  };

  return (
    <div className="referral-table-card">
      <div className="referral-table-header">
        <h3>Referral Overview</h3>

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
            <th>Clicks</th>
            <th>Orders</th>
            <th>Revenue</th>
          </tr>
        </thead>
        <tbody>
          {paginatedRows.length === 0 ? (
            <tr>
              <td colSpan={10} style={{ textAlign: "center" }}>
                No data
              </td>
            </tr>
          ) : (
            paginatedRows.map((row, index) => (
              <tr key={row.id}>
                <td>
                  <input type="checkbox" />
                </td>
                <td>{page * rowsPerPage + index + 1}.</td>
                <td>
                  <div className="referral-name">
                    {/* you can put avatar here */}
                    <span className="avatar-placeholder">
                      {row.productName[0]}
                    </span>
                    <span>{row.productName}</span>
                    {row.tag && <span className="pill-new">{row.tag}</span>}
                  </div>
                </td>
                <td>{row.date}</td>
                <td>{row.time}</td>
                <td>{row.coupon}</td>
                <td>{row.commission}</td>
                <td>{row.clicks}</td>
                <td>{row.orders}</td>
                <td>{row.revenue}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <div className="referral-table-footer">
        <span>Rows per page: {rowsPerPage}</span>
        <Pagination
          page={page}
          rowsPerPage={rowsPerPage}
          totalCount={filteredRows.length}
          onPageChange={setPage}
        />
      </div>
    </div>
  );
};

export default ReferralTable;
