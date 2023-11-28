import { formatDateToStringV2 } from "./04.js";

export function createTimer(inputFunction, hours, minutes, seconds) {
  const miliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;

  const interval = setInterval(() => {
    setTimeout(() => {
      inputFunction();
      clearInterval(interval);
    }, miliseconds);
  }, 1000);
}

createTimer(
  () => {
    console.log(formatDateToStringV2());
  },
  0,
  0,
  2
);
