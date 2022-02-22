function limpiar () {
    document.getElementById('Formulario').reset();
}

function calcular () {
    var x = parseFloat(document.getElementById('monto').value);
    document.getElementById('3-cuotas').innerHTML = x/3;
    document.getElementById('6-cuotas').innerHTML = x/6;
    document.getElementById('9-cuotas').innerHTML = x/9;
    document.getElementById('12-cuotas').innerHTML = x/12;
    document.getElementById('24-cuotas').innerHTML = x/24;

}