import Breadcrumb from "../components/Breadcrumb";
import EarningHistoryTable from "../components/EarningHistoryTable";
import { EARNING_HISTORY_ROWS } from "../constants/earninghistoryData";

const breadcrumbItems = [
  { label: "Affiliate" },
  { label: "Earning History", path: "/affiliate/earning-history" },
];

const EarningHistory = () => {
  return (
    <div className="affiliate-dashboard">
      <Breadcrumb items={breadcrumbItems} />
      <EarningHistoryTable rows={EARNING_HISTORY_ROWS} />
    </div>
  );
};

export default EarningHistory;
