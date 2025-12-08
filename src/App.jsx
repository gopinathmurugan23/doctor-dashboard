import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Schedule from "./pages/Schedule";
import Appointments from "./pages/Appointments";
import Affiliate from "./pages/Affiliate";
import { USER } from "./constants";
import HomeDashboard from "./pages/HomeDashboard";

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <MainLayout
      user={USER}
      collapsed={collapsed}
      onToggleSidebar={() => setCollapsed(!collapsed)}
    >
      <Routes>
        <Route path="/" element={<HomeDashboard />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/appointments" element={<Appointments />} />
        <Route path="/affiliate/dashboard" element={<Dashboard />} />
        <Route path="/affiliate/referral-tool" element={<Patients />} />
        <Route path="/affiliate/earning-history" element={<Schedule />} />
      </Routes>
    </MainLayout>
  );
}
