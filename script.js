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
