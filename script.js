let countDown = new Date("April 27, 2024").getTime();

const setIntervalId = setInterval(() => {
  let now = new Date().getTime();
  let distance = countDown - now;
  if (distance < 0) {
    clearInterval(setIntervalId);
    document.querySelector(".launch-time").style.display = "none";
  }
  let days = Math.floor(distance / (1000 * 60 * 60 * 24));
  let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hrs").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
}, 1000);
