// src/App.jsx
import React, { useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import MainLayout from "./components/MainLayout";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Schedule from "./pages/Schedule";
import Appointments from "./pages/Appointments";
import Affiliate from "./pages/Affiliate"; // optional, not used in routes
import { USER } from "./constants";
import HomeDashboard from "./pages/HomeDashboard";
import ReferralTool from "./pages/ReferralTool";
import EarningHistoryTable from "./pages/EarningHistory";
import ChatTool from "./pages/Chat";
import Consultation from "./pages/Consultation";
import Wallet from "./pages/Wallet";
import AffiliateIntroModal from "./components/AffiliateIntroModal";

const INTRO_KEY = "affiliate_intro_seen_v2"; // 🔁 new key so it shows again

export default function App() {
  const [collapsed, setCollapsed] = useState(false);

  // decide initial state based on localStorage
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === "undefined") return false;
    return !localStorage.getItem(INTRO_KEY);
  });

  const navigate = useNavigate();

  const handleGetStarted = () => {
    localStorage.setItem(INTRO_KEY, "true");
    setShowIntro(false);
    navigate("/affiliate/dashboard"); // redirect
  };

  return (
    <>
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

      <AffiliateIntroModal open={showIntro} onGetStarted={handleGetStarted} />
    </>
  );
}
