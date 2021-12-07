let second_till_now = 0;
let stopwatch;

let start = document.querySelector("#start");
let stop = document.querySelector("#stop");
let reset = document.querySelector("#reset");

let clock = document.querySelector(".clock");

stop.disabled = true;

function display_watch() {
  let hour = Math.floor(second_till_now / 3600);
  let minute = Math.floor((second_till_now % 3600) / 60);
  let second = Math.floor(second_till_now % 60);
  if (hour < 10) {
    hour = "0" + hour;
  }
  if (minute < 10) {
    minute = "0" + minute;
  }
  if (second < 10) {
    second = "0" + second;
  }
  clock.textContent = hour + ":" + minute + ":" + second;
  second_till_now++;
}

start.addEventListener("click", () => {
  stopwatch = setInterval(display_watch, 1000);
  stop.disabled = false;
  start.disabled = true;
});

stop.addEventListener("click", () => {
  clearInterval(stopwatch);
  stop.disabled = true;
  start.disabled = false;
});

reset.addEventListener("click", () => {
  clearInterval(stopwatch);
  second_till_now = 0;
  display_watch();
  start.disabled = false;
  stop.disabled = true;
});

display_watch();
