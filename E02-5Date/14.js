function chronometer (time) {
  
  let [hours, minutes, seconds] = time;

  if (seconds === 60) { seconds = 0; minutes++; }
  if (minutes === 60) { minutes = 0, hours++; }
  if (hours === 24) { hours = 0}


  return `${hours}:${minutes}:${seconds}`;
}

const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

start.addEventListener("click", () => {
  let hours = 0,
    minutes = 0,
    seconds = 0;

  const interval = setInterval(() => {
    timer.innerText = chronometer({ hours, minutes, seconds });
    seconds++;
    console.log(seconds);
    stop.addEventListener("click", () => {
      clearInterval(interval);
    });
  }, 1000);
});
