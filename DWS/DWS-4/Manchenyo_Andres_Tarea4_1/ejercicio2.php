<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="estilo/ejercicio.css">
    <title>Ejercicio 2</title>
</head>

<body>

    <header>
        <h1>Ejercicio 2</h1>
    </header>

    <?php
    if (isset($_GET["numero"])) {
        $contador = 1;
        $numeroParametro = $_GET["numero"];
        $numeros = fopen("ficheroNumeros.txt", "r");
        while (!feof($numeros)) {
            $numeroAComprobar = fscanf($numeros, "%d");
            if ($numeroParametro == $numeroAComprobar[0]) {
                echo "El número pasado por párametro (" . $numeroParametro . ") se encuentra en el fichero en la posición " . $contador . ".<br>";
            }
            $contador++;
        }
    }
    ?>

</body>

</html>