// Select a basic operation
function getOperation() {
  const operationSelect = document.getElementById("calculator");
  return operationSelect.value;
}

// Get inputs and convert them
function getNumbersAndLog() {
  // Strings Inputs
  const firstNumString = document.getElementById("inputone").value;
  const secondNumString = document.getElementById("inputtwo").value;

  // Convert string inputs to numbers
  const firstNum = parseFloat(firstNumString.replace(",", "."));
  const secondNum = parseFloat(secondNumString.replace(",", "."));

  return { firstNum, secondNum };
}

// Invalid Numbers
function invalidNumber() {
  const invalid = "Inputs should be a valid number!";
  return invalid;
}

// Numbers dividedByZero
function divideByZero() {
  const byZero = "It is not possible to divide by 0.";
  return byZero;
}

// Get HTML result element
function logHTML() {
  const logResult = document.getElementById("final_result");
  return logResult;
}

// Calculate function
function calculate() {
  const { firstNum, secondNum } = getNumbersAndLog();
  const operation = getOperation();

  if (!isNaN(firstNum) && !isNaN(secondNum)) {
    switch (operation) {
      case "addition":
        return firstNum + secondNum;
        break;
      case "subtraction":
        return firstNum - secondNum;
        break;
      case "division":
        if (firstNum === 0 || secondNum === 0) {
          logHTML().innerHTML = divideByZero();
          break;
        } else return firstNum / secondNum;
        break;
      case "multiplication":
        if (
          (firstNum === 0 || secondNum === 0) &&
          (firstNum < 0 || secondNum < 0)
        ) {
          return 0;
          break;
        } else return firstNum * secondNum;
        break;
    }
  } else {
    logHTML().innerHTML = invalidNumber();
  }
}

// Log calculate results
function calculateAndLog() {
  const result = calculate();

  switch (true) {
    case result !== undefined:
      logHTML().innerHTML = result.toFixed(2);
      break;
    case result === NaN:
      logHTML().innerHTML = 0;
      break;
  }
}
