import React from "react";
import { APPOINTMENTS } from "../constants";

export default function Appointments() {
  return (
    <div className="page appointments">
      <h2>Appointments</h2>
      <ul>
        {APPOINTMENTS.map((a) => (
          <li key={a.id} className="appt">
            <div className="who">{a.patient}</div>
            <div className="when">{a.time}</div>
            <div className="status">{a.status}</div>
          </li>
        ))}
      </ul>
    </div>
  );
}
