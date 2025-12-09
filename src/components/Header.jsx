import React from "react";

export default function Header({ user, onToggleSidebar }) {
  return (
    <header className="header">
      <div className="header-left">
        <img src={`/images/Amrutam_Logo.svg`} alt="" />
        <button
          className="menu-btn"
          onClick={onToggleSidebar}
          aria-label="Toggle menu"
        >
          <img src={`/images/menu.svg`} alt="menu-icon" />
        </button>
        <div className="search">
          <img
            src={`/images/search-icon.svg`}
            alt="search-icon"
            style={{ position: "absolute", padding: "5px" }}
          />
          <input
            placeholder="Search here"
            style={{
              background: "#3A643B0D",
              border: "none",
              minWidth: "270px",
              paddingLeft: "30px",
            }}
          />
        </div>
      </div>

      <div className="header-right">
        <div className="icon-wrapper">
          <img
            src={"/images/mail-icon.svg"}
            style={{ cursor: "pointer" }}
            alt="mail-icon"
          />
          <span className="badge-dot"></span>
        </div>

        <div className="icon-wrapper">
          <img
            src={"/images/bell-icon.svg"}
            style={{ cursor: "pointer" }}
            alt="notification-icon"
          />
          <span className="badge-dot"></span>
        </div>

        <div
          className="user-info"
          style={{ color: "#3A643B", textAlign: "end" }}
        >
          <div className="name" style={{ fontWeight: "bold" }}>
            {user.name}
          </div>
          <div className="role" style={{ fontSize: "12px" }}>
            {user.role}
          </div>
        </div>
        <img src="https://i.pravatar.cc/40" alt="avatar" className="avatar" />
        <img
          style={{ cursor: "pointer" }}
          src={`/images/settings.svg`}
          alt=""
        />
      </div>
    </header>
  );
}
