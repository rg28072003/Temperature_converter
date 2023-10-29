function convertToFahrenheit() {
  var celsiusInput = document.getElementById("celsius-input").value;
  var fahrenheitOutput = document.getElementById("fahrenheit-output");
  
  var celsius = parseFloat(celsiusInput);
  var fahrenheit = (celsius * 9/5) + 32;

  fahrenheitOutput.innerText = "Temperature in Fahrenheit: " + fahrenheit.toFixed(2);
}

