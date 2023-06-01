
var numeroram = Math.floor(Math.random() * 100) + 1;
var contadorIntentos = 0;

function generarnumero() {
  contadorIntentos++;
  
  var adivinar = parseInt(document.getElementById("AdivinarInp").value);

  if (isNaN(adivinar) || adivinar < 1 || adivinar > 100) {
    document.getElementById("resultado").innerHTML = "Ingresa un número válido entre 1 y 100.";
  } else if (adivinar === numeroram) {
    document.getElementById("resultado").innerHTML = "¡Adivinaste! El número era " + numeroram;
  } else if (adivinar < numeroram) {
    document.getElementById("resultado").innerHTML = "Intenta con un número más alto.";
  } else {
    document.getElementById("resultado").innerHTML = "Intenta con un número más bajo.";
  }
  
  document.getElementById("intentos").innerHTML = "Intentos: " + contadorIntentos;
}

