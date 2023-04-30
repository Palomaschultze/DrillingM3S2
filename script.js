function convert() {
    let toggles = document.getElementById("seleccionarToggles");
    let bigTemp = document.getElementById("bigTemp");
    let items = document.querySelectorAll(".weakly-weather-item");

    if (toggles.checked) {
        // Cambiar a Fahrenheit
        bigTemp.innerHTML = Math.round(parseFloat(bigTemp.innerHTML) * 9 / 5 + 32);
        $("#bigC").text("°F");
        items.forEach(function (item) {
            item.querySelector(".mb-0").innerHTML = Math.round(parseInt(item.querySelector(".mb-0").innerHTML) * 9 / 5 + 32);
        });
    } else {
        // Cambiar a Celsius
        bigTemp.innerHTML = Math.round((parseInt(bigTemp.innerHTML) - 32) * 5 / 9);
        $("#bigC").text("°C");
        items.forEach(function (item) {
            item.querySelector(".mb-0").innerHTML = Math.round((parseInt(item.querySelector(".mb-0").innerHTML) - 32) * 5 / 9);
        });
    }
}