import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Schedule from "./pages/Schedule";
import Appointments from "./pages/Appointments";
import Affiliate from "./pages/Affiliate";
import { USER } from "./constants";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <MainLayout
      user={USER}
      collapsed={collapsed}
      onToggleSidebar={() => setCollapsed(!collapsed)}
    >
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/affiliate" element={<Affiliate />} />
      </Routes>
    </MainLayout>
  );
}
