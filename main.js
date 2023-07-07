function appendToDisplay(value) {
  const display = document.getElementById("display").value += value;
}

function clearDisplay () {
  const display = document.getElementById("display").value = "";
}

function calculateResult() {
  const display = document.getElementById("display");
  const result = eval(display.value);
  display.value = result;
}