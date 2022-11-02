// calls the id
const celciusEl = document.querySelector(`#celcius > input`);
const fahrenheitEl = document.querySelector(`#fahrenheit > input`);
const kelvinEl = document.querySelector(`#kelvin > input`);

// rounds the decimal down to 2 numbers max
const round = function (num) {
    return Math.round(num * 100) / 100;
};

// function calls for calculations
const cel = function () {
    const celVal = parseFloat(celciusEl.value);
    const fahVal = celVal * (9 / 5) + 32;
    const kelVal = celVal + 273.15;
    fahrenheitEl.value = round(fahVal);
    kelvinEl.value = round(kelVal);
};

const fah = function () {
    const fahVal = parseFloat(fahrenheitEl.value);
    const celVal = (fahVal - 32) * (9 / 5);
    const kelVal = (fahVal - 32) * (9 / 5) + 273.15;
    celciusEl.value = round(celVal);
    kelvinEl.value = round(kelVal);
};

const kel = function () {
    const kelVal = parseFloat(kelvinEl.value);
    const celVal = kelVal - 273.15;
    const fahVal = (kelVal - 273.15) * (9 / 5) + 32;
    celciusEl.value = round(celVal);
    fahrenheitEl.value = round(fahVal);
};

// passes the above functions to the input fields
const temps = function () {
    celciusEl.addEventListener(`input`, cel);
    fahrenheitEl.addEventListener(`input`, fah);
    kelvinEl.addEventListener(`input`, kel);
};
temps();
