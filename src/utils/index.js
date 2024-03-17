function formatDate(dateString) {
  const date = new Date(dateString);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return date.toLocaleDateString("en-US", options);
}

const getDateDifferenceFromNow = (fromDate) => {
  let difference = new Date().getTime() - new Date(fromDate).getTime();

  difference = difference / 1000;
  let dayDifference = Math.floor(difference / (3600 * 24));
  difference -= dayDifference * 3600 * 24;
  let hourDifference = Math.floor(difference / 3600);

  let message = "";

  if (dayDifference > 0) {
    message += `${dayDifference} day`;
    if (dayDifference > 1) {
      message += "s";
    }
    message += " ";
  }

  if (hourDifference > 0) {
    message += `${hourDifference} hour`;
    if (hourDifference > 1) {
      message += "s";
    }
  }

  return message.trim();
};

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

export { commentColor, formatDate, getDateDifferenceFromNow };
