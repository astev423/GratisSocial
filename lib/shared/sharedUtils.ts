export function formatDate(dateTimeString: string): string {
  const date = new Date(dateTimeString);
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
}
