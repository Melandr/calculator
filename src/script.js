const calc = document.querySelector(".calc");

calc.addEventListener("click", function (event) {
  if (event.target.classList.contains("calc__btn")) return;
});
