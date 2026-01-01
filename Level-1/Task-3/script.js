function convertTemp() {
    const value = document.getElementById("tempInput").value;
    const unit = document.getElementById("unit").value;
    const result = document.getElementById("result");

    if (value === "" || isNaN(value)) {
        result.innerHTML = "<span class='error'>Please enter a valid number!</span>";
        return;
    }

    const temp = parseFloat(value);
    let output = "";

    if (unit === "celsius") {
        output =
            `${(temp * 9 / 5 + 32).toFixed(2)} °F<br>
             ${(temp + 273.15).toFixed(2)} K`;
    }

    if (unit === "fahrenheit") {
        output =
            `${((temp - 32) * 5 / 9).toFixed(2)} °C<br>
             ${(((temp - 32) * 5 / 9) + 273.15).toFixed(2)} K`;
    }

    if (unit === "kelvin") {
        output =
            `${(temp - 273.15).toFixed(2)} °C<br>
             ${((temp - 273.15) * 9 / 5 + 32).toFixed(2)} °F`;
    }

    result.innerHTML = output;
}
