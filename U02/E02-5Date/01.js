const dayOfTheWeek = (date) => {
  const dayNumber = date.getDay();
  const dayOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  return dayOfWeek[dayNumber];
};

export default dayOfTheWeek;
