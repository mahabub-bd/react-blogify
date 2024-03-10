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
  const backgroundColors = [
    "bg-rose-600",
    "bg-sky-600",
    "bg-green-600",
    "bg-purple-600",
    "bg-yellow-500",
    "bg-blue-500",
    "bg-indigo-500",
    "bg-pink-500",
    "bg-cyan-500",
    "bg-orange-500",
  ];

  const colorIndex = index % backgroundColors.length;

  return backgroundColors[colorIndex];
}

export { commentColor, formatDate };
