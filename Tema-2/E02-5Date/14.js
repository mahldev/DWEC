const timer = document.getElementById("timer");
const start = document.getElementById("start");
const stop = document.getElementById("stop");

class Chronometer {
  constructor(hours, minutes, seconds) {
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
  }

  incrementSeconds() {
    this.seconds++;

    if (this.seconds === 60) {
      this.seconds = 0;
      this.minutes++;
    }
    if (this.minutes === 60) {
      this.minutes = 0;
      this.hours++;
    }
  }

  getFormattedTime() {
    const [formattedHors, formattedMinutes, formattedSeconds] = [
      this.hours.toString().padStart(2, "0"),
      this.minutes.toString().padStart(2, "0"),
      this.seconds.toString().padStart(2, "0"),
    ];
    return `${formattedHors}:${formattedMinutes}:${formattedSeconds}`;
  }
}

start.addEventListener("click", () => {
  const chronometer = new Chronometer(0, 0, 0);

  const interval = setInterval(() => {
    console.log(chronometer.getFormattedTime());
    timer.innerText = chronometer.getFormattedTime();
    chronometer.incrementSeconds();
  }, 1000);

  stop.addEventListener("click", () => {
    clearInterval(interval);
  });
});
