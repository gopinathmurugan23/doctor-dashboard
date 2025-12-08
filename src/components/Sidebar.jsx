import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Example SVG imports (as React components)
// Adjust paths/names to match your project
import { ReactComponent as DashboardIcon } from "../assets/icons/dashboard.svg";
import { ReactComponent as PatientsIcon } from "../assets/icons/patients.svg";
import { ReactComponent as ScheduleIcon } from "../assets/icons/schedule.svg";
import { ReactComponent as AppointmentIcon } from "../assets/icons/appointments.svg";
import { ReactComponent as ChatIcon } from "../assets/icons/chat.svg";
import { ReactComponent as ConsultationIcon } from "../assets/icons/consultation.svg";
import { ReactComponent as AffiliateIcon } from "../assets/icons/affiliate.svg";

export default function Sidebar({ collapsed }) {
  const [affiliateOpen, setAffiliateOpen] = useState(true);

  const affiliateItems = [
    { label: "Dashboard", to: "/affiliate" },
    { label: "Referral Tool", to: "/affiliate/referral-tool" },
    { label: "Earning History", to: "/affiliate/earning-history" },
  ];

  return (
    <div
      className="layout-body"
      style={{ margin: "20px 0px", width: "210px", height: "775px" }}
    >
      <aside className={`sidebar ${collapsed ? "collapsed" : "open"}`}>
        <nav className="sidebar-inner">
          <div className="sidebar-section-title">Main</div>

          <SidebarItem label="Dashboard" to="/" icon={<DashboardIcon />} />
          <SidebarItem
            label="Patients"
            to="/patients"
            icon={<PatientsIcon />}
          />
          <SidebarItem
            label="Doctor Schedule"
            to="/schedule"
            icon={<ScheduleIcon />}
          />
          <SidebarItem
            label="Appointments"
            to="/appointments"
            icon={<AppointmentIcon />}
          />
          <SidebarItem label="Chat" to="/chat" icon={<ChatIcon />} />
          <SidebarItem
            label="Consultation"
            to="/consultation"
            icon={<ConsultationIcon />}
          />

          {/* ONLY Affiliate has submenu */}
          <SidebarCollapsible
            label="Affiliate"
            icon={<AffiliateIcon />}
            isOpen={affiliateOpen}
            onToggle={() => setAffiliateOpen((prev) => !prev)}
            items={affiliateItems}
          />
        </nav>
      </aside>
    </div>
  );
}

/* ---------- Reusable items ---------- */

const SidebarItem = ({ label, icon, to }) => (
  <NavLink
    to={to}
    className={({ isActive }) => `sidebar-item ${isActive ? "active" : ""}`}
  >
    <div className="sidebar-item-icon">{icon}</div>
    <span className="sidebar-item-label">{label}</span>
  </NavLink>
);

const SidebarCollapsible = ({ label, icon, isOpen, onToggle, items }) => (
  <div className="sidebar-collapsible">
    <button className="sidebar-item" onClick={onToggle} type="button">
      <div className="sidebar-item-icon">{icon}</div>
      <span className="sidebar-item-label">{label}</span>

      <span className="sidebar-arrow" aria-hidden="true">
        {isOpen ? "▲" : "▼"}
      </span>
    </button>

    {isOpen && (
      <div className="sidebar-submenu">
        {items.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            className={({ isActive }) =>
              `sidebar-subitem ${isActive ? "subitem-active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    )}
  </div>
);
