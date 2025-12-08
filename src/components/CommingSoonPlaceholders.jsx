import React from "react";

const ComingSoonPlaceholder = ({ title, subtitle }) => {
  return (
    <div className="placeholder-page-wrapper">
      <div className="placeholder-card">
        <h2 className="placeholder-title">{title}</h2>

        <p className="placeholder-subtitle">
          {subtitle || "This screen is currently under development."}
        </p>

        <div className="placeholder-badge">Coming Soon</div>
      </div>
    </div>
  );
};

export default ComingSoonPlaceholder;
