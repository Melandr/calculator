const calc = document.querySelector(".calc");
const result = document.querySelector("#result");

let audioClick = new Audio("./audio/click.mp3");
let audioError = new Audio("./audio/error_click.mp3");

calc.addEventListener("click", calculation);
document.addEventListener("keydown", calculation);

function calculation(event) {
  if (!(event.target.classList.contains("calc__btn") || event.key.match(/[0-9%\/*\-+\(\)=]|Backspace|Enter|Delete/)))
    return;

  // audioClick.play();
  let valueInput = event.target.value || event.key;
  switch (valueInput) {
    case "C":
    case "Delete":
      clearDisplay();
      break;
    case "=":
    case "Enter":
      if (result.innerText.search(/[^0-9*/+-.]/im) != -1) return;
      if (result.innerText.startsWith("/")) {
        errorAlert();
      } else if (
        result.innerText.includes("--") ||
        result.innerText.includes("-+") ||
        result.innerText.includes("-.") ||
        result.innerText.includes("-*") ||
        result.innerText.includes("-/") ||
        result.innerText.includes("+-") ||
        result.innerText.includes("++") ||
        result.innerText.includes("+.") ||
        result.innerText.includes("+*") ||
        result.innerText.includes("+/") ||
        result.innerText.includes("*-") ||
        result.innerText.includes("*+") ||
        result.innerText.includes("*.") ||
        result.innerText.includes("**") ||
        result.innerText.includes("*/") ||
        result.innerText.includes("/-") ||
        result.innerText.includes("/+") ||
        result.innerText.includes("/.") ||
        result.innerText.includes("/*") ||
        result.innerText.includes("//") ||
        result.innerText.includes(".-") ||
        result.innerText.includes(".+") ||
        result.innerText.includes("..") ||
        result.innerText.includes(".*") ||
        result.innerText.includes("./")
      ) {
        errorAlert();
        // } else if (result.innerText.length > 13) {

        // result.innerText = result.innerText.substring(0, result.innerText.length - 1);
      } else {
        result.innerText = eval(result.innerText).toFixed(2);
      }
      break;
    case "CE":
    case "Backspace":
      result.innerText = result.innerText.substring(0, result.innerText.length - 1);
      break;
    default:
      result.innerText += valueInput;
      break;
  }
}

function errorAlert() {
  audioError.play();
  setTimeout(() => {
    const alert = document.getElementById("alert");
    alert.style.opacity = "1";
    if (alert.style.opacity == "1") {
      setTimeout(() => {
        alert.style.opacity = "0";
      }, 1500);
    }
  });
  clearTimeout();
  clearDisplay();
}

function clearDisplay() {
  result.innerText = "";
}
