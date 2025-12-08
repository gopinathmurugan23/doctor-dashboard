import React, { useState } from "react";

export default function Affiliate() {
  const [open, setOpen] = useState(false);
  return (
    <div className="page affiliate">
      <h2>Affiliate</h2>
      <p>Manage your affiliate links and track earnings.</p>
      <button onClick={() => setOpen(true)} className="btn">
        Introduce Affiliate Earnings
      </button>

      {open && (
        <div className="modal">
          <div className="modal-content">
            <h3>Introducing Affiliate Earnings</h3>
            <p>
              Start earning by recommending Amrutam products in your patient
              routines.
            </p>
            <button onClick={() => setOpen(false)} className="btn">
              Get Started
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
