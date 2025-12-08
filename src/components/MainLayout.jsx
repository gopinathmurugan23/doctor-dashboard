import React from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";

export default function MainLayout({
  children,
  user,
  collapsed,
  onToggleSidebar,
}) {
  return (
    <div className="app-shell">
      <Header user={user} onToggleSidebar={onToggleSidebar} />
      <div className="main-area">
        <Sidebar collapsed={collapsed} />
        <main className="content">{children}</main>
      </div>
    </div>
  );
}
