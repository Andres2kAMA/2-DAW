<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="estilo/ejercicio.css">
    <title>Ejercicio 5</title>
</head>

<body>
    <header>
        <h1>Ejercicio 5</h1>
    </header>

    <?php
    $numeroPalabras = 0;

    $ficheroTexto = fopen("ficheroTexto.txt", "r");

    while (!feof($ficheroTexto)) {
        $lineaAComprobar = fgets($ficheroTexto);
        $numeroPalabras += str_word_count($lineaAComprobar, 0);
    }

    echo "El fichero tiene " . $numeroPalabras . " palabras.";
    ?>

</body>

</html>