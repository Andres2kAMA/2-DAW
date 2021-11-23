<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="estilo/ejercicio.css">
    <title>Ejercicio 4</title>
</head>

<body>
    <header>
        <h1>Ejercicio 4</h1>
    </header>

    <?php
    $numeroCaracteres = 0;
    $numeroLineas = 0;

    $ficheroTexto = fopen("ficheroTexto.txt", "r");

    while (!feof($ficheroTexto)) {
        $lineaAComprobar = fgets($ficheroTexto);
        $numeroCaracteres += strlen($lineaAComprobar);

        $numeroLineas++;
    }

    echo "El fichero tiene " . $numeroCaracteres . " en las " . $numeroLineas . " líneas que lo componen";
    ?>

</body>

</html>