function calculateBMI() {
  let weight = parseInt(document.getElementById("weight").value);
  let height = parseInt(document.getElementById("height").value);

  console.log(weight, height);
  document.querySelector("#result").innerHTML;
  if (height === "") result.innerHTML = "Provide a valid Height!";
  else if (weight === "") result.innerHTML = "Provide a valid Weight!";
  else {
    let bmi = parseInt(weight / ((height * height) / 10000));
    result.innerHTML = "Your BMI is " + bmi;
  }
}

function convertCelsius() {
  let celsius = parseInt(document.getElementById("celsius").value);

  console.log(celsius, fahrenheit);
  document.querySelector("#answercelsius").innerHTML;
  let ctemp = (celsius * (9 / 5) + 32).toFixed(0);
  answerincelsius.innerHTML = ctemp + "F";
}

function convertFahrenheit() {
  let fahrenheit = parseInt(document.getElementById("fahrenheit").value);
  document.querySelector("#answerfahrenheit").innerHTML;
  let ftemp = ((fahrenheit - 32) * (5 / 9)).toFixed(0);
  answerinfahrenheit.innerHTML = ftemp + "C";
}
