// coundown
let endDate = new Date("06/26/2023 00:00:00").getTime();
let check = setInterval(function () {
  let now = new Date().getTime();
  let distance = endDate - now;
  let hour = Math.floor((distance % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
  let minute = Math.floor((distance % (60 * 60 * 1000)) / (60 * 1000));
  let seconds = Math.floor((distance % (60 * 1000)) / 1000);
  document.getElementById("hours").innerText = hour;
  document.getElementById("minutes").innerText = minute;
  document.getElementById("seconds").innerText = seconds;
  if (distance <= 0) {
    clearInterval(check);
  }
}, 1000);
// auto play slide show
let id = setInterval(next, 3000);
function play() {
  id = setInterval(next, 3500);
}
function stop() {
  clearInterval(id);
}

// control slide show
let next1 = document.getElementById("next");
let prev1 = document.getElementById("prev");
next1.addEventListener("click", next);
prev1.addEventListener("click", prev);
function next() {
  let list = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(list[0]);
}
function prev() {
  let list = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(list[list.length - 1]);
}
