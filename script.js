function calculateBMI() {
  let weight = parseInt(document.getElementById("weight").value);
  let height = parseInt(document.getElementById("height").value);

  console.log(weight, height);
  document.querySelector("#result").innerHTML;
  if (height === "" || isNaN(height))
    result.innerHTML = "Provide a valid Height!";
  else if (weight === "" || isNaN(weight))
    result.innerHTML = "Provide a valid Weight!";
  else {
    let bmi = parseInt(weight / ((height * height) / 10000));
    if (bmi < 18.6)
      result.innerHTML = `You are under weight: Your BMI is = ${bmi}`;
    else if (bmi >= 18.6 && bmi < 24.9)
      result.innerHTML = `You have a healthy weight: Your BMI is = ${bmi}`;
    else result.innerHTML = ` You are considered over weight = ${bmi}`;
  }
}
