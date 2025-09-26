let countdown;

const times = document.querySelectorAll(".time");
const span = document.querySelector("span");
const display = document.querySelector(".display");
const timer = document.querySelector(".timer");
const timerEnd = document.querySelector(".timer-end");
const d = new Date();
const y = d.getFullYear();

function time(seconds) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  (countdown) =>
    setInterval(() => {
      const secondsLeft = Math.round((then - Date.now()) / 1000);
      if (secondsLeft < 0) {
        clearInterval(countdown);
        return;
      }
      displayTimeLeft(secondsLeft);
    }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${
    remainderSeconds < 10 ? "0" : ""
  }${remainderSeconds}`;
  document.title = display;
  timer.textContent = display;
}

function displayEndTime(timestamp) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const minutes = end.getMinutes();
  timerEnd.textContent = `You'll finish studying at ${
    hour > 12 ? hour - 12 : hour
  }:${minutes < 10 ? "0" : ""}${minutes}`;
}

function startTimer() {
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

times.forEach((time) => time.addEventListener("click", startTimer));

span.innerText = y;
