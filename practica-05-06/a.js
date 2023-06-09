function CalcularArea(){
    let operador1 = parseFloat(document.getElementById('operador1').value);
    let operador2 = parseFloat(document.getElementById('operador2').value);
    let operador3 = parseFloat(document.getElementById('operador3').value);
    if (operador1 + operador2 > operador3 || operador2 + operador3 > operador1 || operador3 + operador1 > operador2 ){
        let resultado = (operador1 + operador2 + operador3) * 0.5;
        var Re = Math.sqrt(resultado* (resultado - operador1) *(resultado - operador2)*(resultado - operador3))
        document.getElementById('resultadoA').value = Re;
    }
}
function CalcularPerimetro(){
    let operador1 = parseFloat(document.getElementById('operador1').value);
    let operador2 = parseFloat(document.getElementById('operador2').value);
    let operador3 = parseFloat(document.getElementById('operador3').value);
    if (operador1 + operador2 > operador3 || operador2 + operador3 > operador1 || operador3 + operador1 > operador2 ){
    let resultado = (operador1 + operador2 + operador3);
    document.getElementById('resultadoP').value = resultado;
    }
}
function CalcularTipo(){
    let operador1 = parseFloat(document.getElementById('operador1').value);
    let operador2 = parseFloat(document.getElementById('operador2').value);
    let operador3 = parseFloat(document.getElementById('operador3').value);
    if (operador1 + operador2 > operador3 || operador2 + operador3 > operador1 || operador3 + operador1 > operador2 ){
    if (operador1 == operador2 || operador2 == operador3|| operador3 == operador1){
        resultado = "Triangulo equilatero"
    }
    else if (operador1 == operador2 || operador1 == operador3 || operador2 == operador3){
        resultado = "Triangulo isolseles"
    }
    else{
        resultado = "Tringulo escaleno"
    }
    document.getElementById('resultadoT').value = resultado;
}
}
