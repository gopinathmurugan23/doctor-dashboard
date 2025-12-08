import React from "react";
import StatCard from "../components/StatCard";
import { STATS, REFERRALS } from "../constants";

export default function Dashboard() {
  return (
    <div className="page dashboard">
      <div className="grid stats-grid">
        <StatCard
          title="Total Coupons clicks"
          value={STATS.couponsClicks}
          unit="/month"
        />
        <StatCard
          title="Total Visits"
          value={STATS.totalVisits}
          unit="/month"
        />
        <StatCard
          title="Total Link/Coupon"
          value={STATS.totalLinks}
          unit="/month"
        />
      </div>

      <section className="referrals">
        <h3>Referral Overview</h3>
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Gender</th>
              <th>Visits</th>
            </tr>
          </thead>
          <tbody>
            {REFERRALS.map((r, i) => (
              <tr key={r.id}>
                <td>{i + 1}</td>
                <td>{r.name}</td>
                <td>{r.gender}</td>
                <td>{r.visits}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
