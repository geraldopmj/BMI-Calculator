const submitButton = document.getElementById("submit");
submitButton.addEventListener("click", calculateBMI);

function calculateBMI() {
  const heightInput = document.getElementById("height");
  const height = parseInt(heightInput.value);
  if (isNaN(height)) {
    return displayError("Invalid height input");
  }

  const weightInput = document.getElementById("weight");
  const weight = parseFloat(weightInput.value);
  if (isNaN(weight)) {
    return displayError("Invalid weight input");
  }

  const newHeight = height / 100;
  const bmi = weight / (newHeight * newHeight);
  const roundedBMI = bmi.toFixed(1);

  const bmiResult = `BMI: ${roundedBMI}`;
  displayResult(bmiResult, getBMIColor(bmi));
}

function displayError(message) {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = message;
  resultElement.style.color = "red";
}

function displayResult(message, color) {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = message;
  resultElement.style.color = color;
}

function getBMIColor(bmi) {
  if (bmi <= 18.5) {
    return "blue";
  } else if (bmi <= 24.9) {
    return "green";
  } else if (bmi <= 29.9) {
    return "yellow";
  } else if (bmi <= 40) {
    return "orange";
  } else {
    return "red";
  }
}
