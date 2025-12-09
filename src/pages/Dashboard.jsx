import { useMemo, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import StatCard from "../components/StatCard";
import ReferralTable from "../components/ReferralTable";
import {
  AFFILIATE_BREADCRUMB,
  REFERRAL_ROWS,
} from "../constants/affiliateDashboardData";
import { FILTER_TYPES, filterRowsByFilter } from "../utils/dateFilters";
import ClicksIcon from "../icons/total-coupon.svg";
import OrdersIcon from "../icons/total-order.svg";
import RevenueIcon from "../icons/total-revenue.svg";
import LinkIcon from "../icons/total-link.svg";

const TAB_CONFIG = [
  { label: "Today So Far", value: FILTER_TYPES.TODAY },
  { label: "Week So Far", value: FILTER_TYPES.WEEK },
  { label: "Month So Far", value: FILTER_TYPES.MONTH },
  { label: "Custom", value: FILTER_TYPES.CUSTOM },
];

const AffiliateDashboard = () => {
  const [activeFilter, setActiveFilter] = useState(FILTER_TYPES.MONTH);
  const [customRange] = useState(null);

  const filteredRows = useMemo(
    () => filterRowsByFilter(REFERRAL_ROWS, activeFilter, customRange),
    [activeFilter, customRange]
  );

  const stats = useMemo(() => {
    const totalClicks = filteredRows.reduce((sum, r) => sum + r.clicks, 0);
    const totalOrders = filteredRows.reduce((sum, r) => sum + r.orders, 0);
    const totalRevenue = filteredRows.reduce((sum, r) => sum + r.revenue, 0);
    const uniqueCoupons = new Set(filteredRows.map((r) => r.coupon)).size;

    return [
      {
        id: "clicks",
        title: "Total Coupons clicks",
        value: totalClicks.toString(),
        suffix: "/month",
        icon: ClicksIcon,
      },
      {
        id: "orders",
        title: "Total Orders",
        value: totalOrders.toString(),
        suffix: "/month",
        icon: OrdersIcon,
      },
      {
        id: "revenue",
        title: "Total Revenue",
        value: totalRevenue.toLocaleString(),
        suffix: "/month",
        icon: RevenueIcon,
      },
      {
        id: "links",
        title: "Total Link/Coupon",
        value: uniqueCoupons.toString(),
        suffix: "/month",
        icon: LinkIcon,
      },
    ];
  }, [filteredRows]);

  return (
    <div className="affiliate-dashboard">
      <Breadcrumb items={AFFILIATE_BREADCRUMB} />

      <div className="dashboard-tabs">
        {TAB_CONFIG.map((tab) => (
          <button
            key={tab.value}
            className={`tab ${activeFilter === tab.value ? "tab-active" : ""}`}
            onClick={() => setActiveFilter(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="stat-card-row">
        {stats.map((card) => (
          <StatCard key={card.id} {...card} />
        ))}
      </div>

      <ReferralTable rows={filteredRows} />
    </div>
  );
};

export default AffiliateDashboard;
