// src/components/Sidebar.jsx
import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";

import dashboardIcon from "../icons/dashboard-menu-icon.svg";
import patientIcon from "../icons/patients-menu-icon.svg";
import doctorScheduleIcon from "../icons/doctor-schedule-menu-icon.svg";
import appointmentIcon from "../icons/appointment-menu-icon.svg";
import chatIcon from "../icons/chat-menu-icon.svg";
import consultationIcon from "../icons/consultation-menu-icon.svg";
import affiliateIcon from "../icons/affiliate-menu-icon.svg";

export default function Sidebar({ collapsed }) {
  const location = useLocation();

  // Open Affiliate submenu automatically when on any /affiliate route
  const isAffiliatePath = location.pathname.startsWith("/affiliate");
  const [affiliateOpen, setAffiliateOpen] = useState(isAffiliatePath);

  useEffect(() => {
    setAffiliateOpen(isAffiliatePath);
  }, [isAffiliatePath]);

  const affiliateItems = [
    { label: "Dashboard", to: "/affiliate/dashboard" },
    { label: "Referral Tool", to: "/affiliate/referral-tool" },
    { label: "Earning History", to: "/affiliate/earning-history" },
  ];
  const walletItems = [{ label: "Wallet", to: "/wallet" }];

  return (
    <div style={{ margin: "20px 0px" }}>
      <aside className={`sidebar ${collapsed ? "collapsed" : "open"}`}>
        <nav className="sidebar-inner">
          <div className="sidebar-section-title">Main</div>

          <SidebarItem
            label="Dashboard"
            to="/"
            icon={
              <img src={dashboardIcon} alt="Dashboard" className="menu-icon" />
            }
          />
          <SidebarItem
            label="Patients"
            to="/patients"
            icon={
              <img src={patientIcon} alt="Dashboard" className="menu-icon" />
            }
          />
          <SidebarItem
            label="Doctor Schedule"
            to="/schedule"
            icon={
              <img
                src={doctorScheduleIcon}
                alt="Dashboard"
                className="menu-icon"
              />
            }
          />
          <SidebarItem
            label="Appointments"
            to="/appointments"
            icon={
              <img
                src={appointmentIcon}
                alt="Dashboard"
                className="menu-icon"
              />
            }
          />
          <SidebarItem
            label="Chat"
            to="/chat"
            icon={<img src={chatIcon} alt="Dashboard" className="menu-icon" />}
          />
          <SidebarItem
            label="Consultation"
            to="/consultation"
            icon={
              <img
                src={consultationIcon}
                alt="Dashboard"
                className="menu-icon"
              />
            }
          />

          <SidebarCollapsible
            label="Wallet"
            isOpen={affiliateOpen}
            onToggle={() => setAffiliateOpen((prev) => !prev)}
            items={walletItems}
            icon={
              <img src={affiliateIcon} alt="Dashboard" className="menu-icon" />
            }
          />
          <SidebarCollapsible
            label="Affiliate"
            isOpen={affiliateOpen}
            onToggle={() => setAffiliateOpen((prev) => !prev)}
            items={affiliateItems}
            icon={
              <img src={affiliateIcon} alt="Dashboard" className="menu-icon" />
            }
          />
        </nav>
      </aside>
    </div>
  );
}

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
              `sidebar-item ${isActive ? "subitem-active" : ""}`
            }
          >
            {item.label}
          </NavLink>
        ))}
      </div>
    )}
  </div>
);
