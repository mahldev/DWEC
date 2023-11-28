function createTimer(inputFunction, hours, minutes, seconds) {
  const miliseconds = (hours * 3600 + minutes * 60 + seconds) * 1000;

  const interval = setInterval(() => {
    setTimeout(() => {
      inputFunction();
      clearInterval(interval);
    }, miliseconds);
  }, 1000);
}

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const button = document.getElementById("start");

button.addEventListener("click", () => {
  createTimer(
    () => {
      location.replace("https://iesbelen.org/");
    },
    hours.value,
    minutes.value,
    seconds.value
  );
});
