<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<?php
        $nombre=$_POST['nombre'];
        $usuario = $_POST['usuario'];
        $contra = $_POST['pass1'];
        $contra2 = $_POST['pass2'];
        
        echo('Los datos obtenidos son los siguientes');
    ?>
        <br><br>
        <table border="1">
            <tr>
                <td> Nombre Completo </td>
                <td> <?php echo($nombre); ?> </td>
            <tr>
                <td> Usuario </td>
                <td> <?php echo($usuario); ?> </td>
            <tr>                
                <td> Contraseña </td>
                <td> <?php echo($pass2); ?> </td>
            <tr>                
                <td> Contraseña confirmada </td>
                <td> <?php echo($pass2); ?> </td>

            </tr>
        </table>
</body>
</html>