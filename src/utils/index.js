function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}
function commentColor(index) {
  const backgroundColor =
    index === 0
      ? "bg-rose-600"
      : index === 1
      ? "bg-sky-600"
      : index === 2
      ? "bg-green-600"
      : "bg-purple-600";
  return backgroundColor;
}
export { commentColor, formatDate };
