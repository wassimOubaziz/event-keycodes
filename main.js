const events = document.querySelectorAll("h3");
const content = document.querySelector(".content");
const press = document.querySelector(".press");
window.addEventListener("keypress", function (e) {
  content.style.display = "flex";
  press.style.display = "none";
  events[0].textContent = e.key;
  events[1].textContent = e.keyCode;
  events[2].textContent = e.code;
});
