function celsiusAFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    let texto = `${celsius}°C son ${fahrenheit.toFixed(2)}°F`;
    return texto
}

function fahrenheitACelsius(fahrenheit) {
    const celsius = (fahrenheit - 32) * 5/9;
    let texto = `${fahrenheit}°F son ${celsius.toFixed(2)}°C`;
    return texto;
}

function celsiusAKelvin(celsius) {
    const kelvin = celsius + 273.15;
    let texto = `${celsius}°C son ${kelvin.toFixed(2)}K`;
    return texto;
}   

export {celsiusAFahrenheit, fahrenheitACelsius, celsiusAKelvin};