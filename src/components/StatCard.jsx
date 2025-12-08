import React from "react";
export default function StatCard({ title, value, unit }) {
  return (
    <div className="statcard">
      <div className="title">{title}</div>
      <div className="value">
        {value} <span className="unit">{unit}</span>
      </div>
    </div>
  );
}
