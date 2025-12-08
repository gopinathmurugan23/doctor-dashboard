// src/components/Breadcrumb.js
import { Link } from "react-router-dom";

const Breadcrumb = ({ items }) => {
  return (
    <nav className="breadcrumb">
      {items.map((item, index) => {
        const isLast = index === items.length - 1;
        return (
          <span key={item.path} className="breadcrumb-item">
            {!isLast ? (
              <>
                <Link to={item.path}>{item.label}</Link>
                <span className="breadcrumb-separator">›</span>
              </>
            ) : (
              <span className="breadcrumb-current">{item.label}</span>
            )}
          </span>
        );
      })}
    </nav>
  );
};

export default Breadcrumb;
