export const USER = { name: "Dr. Liam Michael", role: "Doctor" };
export const STATS = { couponsClicks: 255, totalLinks: 5, totalVisits: 1240 };
export const REFERRALS = [
  { id: 1, name: "Andrea Lalema", visits: 2, gender: "Female" },
  { id: 2, name: "Smith Bruklin", visits: 4, gender: "Male" },
  { id: 3, name: "William Stephin", visits: 1, gender: "Female" },
];
export const PATIENTS = [
  { id: 1, name: "Ramesh Kumar", age: 34, lastVisit: "2025-11-12" },
  { id: 2, name: "Sita Devi", age: 28, lastVisit: "2025-10-28" },
];
export const SCHEDULE = [
  { day: "Mon", slots: ["10:00", "11:00"] },
  { day: "Tue", slots: ["12:00", "15:00"] },
];
export const APPOINTMENTS = [
  {
    id: 1,
    patient: "Ramesh Kumar",
    time: "2025-12-10 10:00",
    status: "Confirmed",
  },
  { id: 2, patient: "Sita Devi", time: "2025-12-12 12:00", status: "Pending" },
];
