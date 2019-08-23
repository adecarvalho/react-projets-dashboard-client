export function formatDate(val) {
  const options = {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric"
  }
  //
  const date = new Date(val)
  return date.toLocaleDateString("fr-FR", options)
}
