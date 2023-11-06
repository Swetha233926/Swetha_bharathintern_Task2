function convertTemperature() {
    // Get the input value
    var celsiusInput = document.getElementById("celsius");
    var celsius = parseFloat(celsiusInput.value);
  
    // Check if the input is a valid number
    if (isNaN(celsius)) {
      alert("Please enter a valid number for Celsius.");
      return;
    }
  
    // Convert Celsius to Fahrenheit
    var fahrenheit = (celsius * 9/5) + 32;
  
    // Display the result
    var resultElement = document.getElementById("result");
    resultElement.innerHTML = `${celsius} Celsius is ${fahrenheit.toFixed(2)} Fahrenheit.`;
  }
  
