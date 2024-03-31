let notoperators = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
let operator = "";

function append(val) {
  document.getElementById("display").value += val;
  if (!(val in notoperators) && val != ".") {
    operator = val;
  }
}

function calculate() {
  let string = document.getElementById("display").value;
  let numbers = string.split(operator);
  let n1 = Number(numbers[0]);
  let n2 = Number(numbers[1]);
  let result = "";

  switch (operator) {
    case "+":
      result = n1 + n2;
      break;
    case "−":
      result = n1 - n2;
      break;
    case "×":
      result = n1 * n2;
      break;
    case "÷":
      result = n1 / n2;
      break;
    default:
      result = "";
      break;
  }
  document.getElementById("display").value = result.toString();
}

function allclear() {
  document.getElementById("display").value = "";
}

function deleteValue() {
  let nowValue = document.getElementById("display").value;
  document.getElementById("display").value = nowvalue.slice(0, -1);
}
