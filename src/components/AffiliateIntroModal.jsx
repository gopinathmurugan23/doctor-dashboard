// src/components/AffiliateIntroModal.jsx
import React from "react";
import introImage from "../icons/affiliate-intro.svg";

export default function AffiliateIntroModal({ open, onGetStarted }) {
  if (!open) return null;

  return (
    <div className="intro-overlay">
      <div className="intro-modal">
        <img src={introImage} alt="Affiliate intro" className="intro-image" />

        <h2 className="intro-title">Introducing Affiliate Earnings</h2>

        <p className="intro-text">
          Start earning by recommending Amrutam products in your patient
          routines.
        </p>
        <p className="intro-text">
          Get commissions for every successful referral through your unique link
          or coupon.
        </p>

        <button className="intro-primary-btn" onClick={onGetStarted}>
          Get Started
        </button>
      </div>
    </div>
  );
}
