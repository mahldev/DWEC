import dayOfTheWeek from "./01.js";

const showFormatDate = () => {
  const now = new Date();
  const [day, hours, minutes, seconds] = [
    dayOfTheWeek(now),
    now.getHours(),
    now.getMinutes(),
    now.getSeconds(),
  ];

  const amOrPM = hours >= 12 ? "PM" : "AM";
  const [formattedHours, formattedMinutes, formattedSeconds] = [
    hours > 12 ? hours - 12 : hours,
    minutes < 10 ? `0${minutes}` : minutes,
    seconds < 10 ? `0${seconds}` : seconds,
  ];

  const formattedTime = `${
    formattedHours < 10 ? `0${formattedHours}` : formattedHours
  }${amOrPM} ${formattedMinutes}:${formattedSeconds}`;

  console.log(`${day}. Now: ${formattedTime}`);
};

showFormatDate();
