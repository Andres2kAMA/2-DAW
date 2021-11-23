<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="estilo/ejercicio.css">
    <title>Ejercicio 1</title>
</head>

<body>
    <header>
        <h1>Ejercicio 1</h1>
    </header>

    <?php

    //Preguntar si pide esto
    $ficheros[0] = file_get_contents("ejercicio1CopiaFichero1.php");
    $ficheros[1] = file_get_contents("ejercicio1CopiaFichero2.php");

    foreach ($ficheros as $ficheroIndividual) {
        echo $ficheroIndividual;
    }

    ?>

</body>

</html>