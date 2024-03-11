
function conversor() {
    var entradaTemp = document.getElementsByClassName('tpTempInput')[0].value;
    var saidaTemp = document.getElementsByClassName('tpTempConverte')[0].value;
    var resultado = document.getElementsByClassName('resultado')[0];
    var tempInput = document.getElementsByClassName('temperatura')[0].value.trim();
    var temperaturaInput = parseFloat(tempInput);

    if (tempInput === '' || isNaN(temperaturaInput)) {
        resultado.innerText = 'Insira uma temperatura válida.';
        return;
    }

    if ((entradaTemp === 'kelvin' && temperaturaInput < 0) || (entradaTemp === 'celsius' && temperaturaInput < -273.15)) {
        resultado.innerText = 'A temperatura não é válida. Insira novamente.';
        return;
    }

    var celsius, fahrenheit, kelvin;

    if (entradaTemp === 'celsius') {
        celsius = temperaturaInput;

        if (saidaTemp === 'fahrenheit') {
            fahrenheit = celsius * 9 / 5 + 32;
            resultado.innerText = 'O valor em Fahrenheit é: ' + fahrenheit.toFixed(2) + ' °F';
        } else if (saidaTemp === 'kelvin') {
            kelvin = celsius + 273.15;
            resultado.innerText = 'O valor em Kelvin é: ' + kelvin.toFixed(2) + ' K';
        } else {
            resultado.innerText = 'Você não pode converter de Celsius para Celsius.';
        }
    }

    if (entradaTemp === 'fahrenheit') {
        fahrenheit = temperaturaInput;

        if (saidaTemp === 'celsius') {
            celsius = (fahrenheit - 32) * 5 / 9;
            resultado.innerText = 'O valor em Celsius é: ' + celsius.toFixed(2) + ' °C';
        } else if (saidaTemp === 'kelvin') {
            kelvin = (fahrenheit - 32) * 5 / 9 + 273.15;
            resultado.innerText = 'O valor em Kelvin é: ' + kelvin.toFixed(2) + ' K';
        } else {
            resultado.innerText = 'Você não pode converter de Fahrenheit para Fahrenheit.';
        }
    }

    if (entradaTemp === 'kelvin') {
        kelvin = temperaturaInput;

        if (saidaTemp === 'celsius') {
            celsius = kelvin - 273.15;
            resultado.innerText = 'O valor em Celsius é: ' + celsius.toFixed(2) + ' °C';
        } else if (saidaTemp === 'fahrenheit') {
            fahrenheit = (kelvin - 273.15) * 9 / 5 + 32;
            resultado.innerText = 'O valor em Fahrenheit é: ' + fahrenheit.toFixed(2) + ' °F';
        } else {
            resultado.innerText = 'Você não pode converter de Kelvin para Kelvin.';
        }
    }
}

