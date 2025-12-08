import React from "react";
import { PATIENTS } from "../constants";

export default function Patients() {
  return (
    <div className="page patients">
      <h2>Patients</h2>
      <table className="list">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
            <th>Last Visit</th>
          </tr>
        </thead>
        <tbody>
          {PATIENTS.map((p) => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>{p.name}</td>
              <td>{p.age}</td>
              <td>{p.lastVisit}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
