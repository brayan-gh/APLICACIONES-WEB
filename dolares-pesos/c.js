function convertir() {
    var tipoConversion = document.getElementById("tipoConversion").value;
    var cantidad = document.getElementById("cantidad").value;
    var resultado = document.getElementById("resultado");

    if (tipoConversion === "pesos-dolares") {
      resultado.innerHTML = "Resultado: $" + (cantidad / 20).toFixed(2) + " dólares";
    } else if (tipoConversion === "dolares-pesos") {
      resultado.innerHTML = "Resultado: $" + (cantidad * 20).toFixed(2) + " pesos";
    }
  }

  function limpiar() {
    document.getElementById("tipoConversion").selectedIndex = 0;
    document.getElementById("cantidad").value = "";
    document.getElementById("resultado").innerHTML = "Resultado:";
  }

