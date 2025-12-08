// src/utils/dateFilters.js (optional file)

export const FILTER_TYPES = {
  TODAY: "today",
  WEEK: "week",
  MONTH: "month",
  CUSTOM: "custom",
};

export function filterRowsByFilter(rows, activeFilter, customRange) {
  if (activeFilter === FILTER_TYPES.CUSTOM && customRange) {
    const { start, end } = customRange;
    return rows.filter((row) => {
      const d = new Date(row.createdAt);
      return d >= start && d <= end;
    });
  }

  const now = new Date();
  const todayStart = new Date(now.getFullYear(), now.getMonth(), now.getDate());

  if (activeFilter === FILTER_TYPES.TODAY) {
    return rows.filter((row) => {
      const d = new Date(row.createdAt);
      return d >= todayStart;
    });
  }

  if (activeFilter === FILTER_TYPES.WEEK) {
    const day = todayStart.getDay(); // 0–6
    const diff = day === 0 ? 6 : day - 1; // make Monday start
    const weekStart = new Date(todayStart);
    weekStart.setDate(todayStart.getDate() - diff);

    return rows.filter((row) => {
      const d = new Date(row.createdAt);
      return d >= weekStart;
    });
  }

  if (activeFilter === FILTER_TYPES.MONTH) {
    const monthStart = new Date(now.getFullYear(), now.getMonth(), 1);
    return rows.filter((row) => {
      const d = new Date(row.createdAt);
      return d >= monthStart;
    });
  }

  // default: all
  return rows;
}
