import React from "react";
import { SCHEDULE } from "../constants";

export default function Schedule() {
  return (
    <div className="page schedule">
      <h2>Doctor Schedule</h2>
      <div className="grid schedule-grid">
        {SCHEDULE.map((s) => (
          <div key={s.day} className="card">
            <div className="day">{s.day}</div>
            <div className="slots">{s.slots.join(", ")}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
