// utils/formatDate.js
// Deterministic date formatting used both during SSR and client-side.
// Uses an explicit locale + options so server and client render the same string.

export function formatDateISO(dateInput) {
  // returns YYYY-MM-DD (safe and unambiguous)
  const d = new Date(dateInput);
  const y = d.getUTCFullYear();
  const m = String(d.getUTCMonth() + 1).padStart(2, "0");
  const day = String(d.getUTCDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

export function formatDateFriendly(dateInput) {
  // friendly format: 01 Jan 2025  (explicit ordering and month names)
  // This uses a deterministic list of month names so it matches on server & client.
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const d = new Date(dateInput);
  const day = String(d.getUTCDate()).padStart(2, "0");
  const mon = months[d.getUTCMonth()];
  const year = d.getUTCFullYear();
  return `${day} ${mon} ${year}`;
}
