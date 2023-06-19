function validar(){
    var passw1 = document.getElementById(contr1).value;
    var passw2 = document.getElementById(contr2).value;

    if(passw1 == passw2)
    {
        alert("A sido validada")
    }
    else{
        alert("No coinciden los datos")
    } 
}

