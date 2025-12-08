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
import ReferralTool from "./pages/ReferralTool";
import EarningHistoryTable from "./pages/EarningHistory";
import ChatTool from "./pages/Chat";
import Consultation from "./pages/Consultation";
import Wallet from "./pages/Wallet";

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
        <Route path="/chat" element={<ChatTool />} />
        <Route path="/consultation" element={<Consultation />} />
        <Route path="/wallet" element={<Wallet />} />
        <Route path="/affiliate/dashboard" element={<Dashboard />} />
        <Route path="/affiliate/referral-tool" element={<ReferralTool />} />
        <Route
          path="/affiliate/earning-history"
          element={<EarningHistoryTable />}
        />
      </Routes>
    </MainLayout>
  );
}
