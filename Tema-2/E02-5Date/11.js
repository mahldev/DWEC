import { formatDateToStringV2 } from "./04.js";

function displayDigitalClock() {
  setInterval(() => {
    console.log(formatDateToStringV2());
  }, 1000);
}

displayDigitalClock();
