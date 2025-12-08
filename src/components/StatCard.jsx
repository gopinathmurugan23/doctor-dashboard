// src/components/StatCard.js

const StatCard = ({ title, value, suffix, currency, icon }) => {
  return (
    <div className="stat-card">
      <div className="stat-card-top">
        <div className="stat-card-header">{title}</div>
      </div>

      <div className="stat-card-body">
        <div className="stat-icon-badge">
          {icon && <img src={icon} alt={title} className="stat-svg-icon" />}
        </div>
        {currency && <span className="stat-card-currency">{currency}</span>}
        <span className="stat-card-value">{value}</span>
        {suffix && <span className="stat-card-suffix">{suffix}</span>}
      </div>
    </div>
  );
};

export default StatCard;
