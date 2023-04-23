
function convert (temperatura){
    let temperaturaCelsius = parseInt(temperatura.textContent);
    let chequeada = true;
    

    if ($("#seleccionarToggles").is(":checked")) {
        chequeada = false;
    }

    if (chequeada) {
        let celsius = parseInt((temperaturaCelsius -32) / 1.8);
        bigTemp.innerHTML = celsius;
        $("#bigC").text("°C");
        console.log(temperatura.textContent)
        
    }else{
        let fahrenheit = parseInt(temperaturaCelsius * 1.8) + 32;
        bigTemp.innerHTML = fahrenheit;
        $("#bigC").text("°F");

    }

}
