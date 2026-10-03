const dateFormatter = new Intl.DateTimeFormat("gu-IN", {
  day: "numeric",
  month: "long",
  year: "numeric",
  timeZone: "Asia/Kolkata",
});

/** "2024-05-20" → "20 મે, 2024" */
export function formatDate(iso: string) {
  return dateFormatter.format(new Date(`${iso}T00:00:00+05:30`));
}
