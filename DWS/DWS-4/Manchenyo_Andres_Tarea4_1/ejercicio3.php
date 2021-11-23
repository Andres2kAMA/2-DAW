<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" type="text/css" href="estilo/ejercicio.css">
    <title>Ejercicio 3</title>
</head>

<body>
    <header>
        <h1>Ejercicio 3</h1>
    </header>

    <?php
    $numerosTotales = 0;
    $numerosPares = 0;

    $numeros = fopen("ficheroNumeros.txt", "r");

    while (!feof($numeros)) {
        $numeroAComprobar = fscanf($numeros, "%d");

        if ($numeroAComprobar[0] % 2 == 0) {
            $numerosPares++;
        }

        $numerosTotales++;
    }

    echo "El porcentaje de números pares del archivo 'ficheroNumeros.txt' es de " . round(($numerosPares * 100) / $numerosTotales, 2) . ".";
    ?>

</body>

</html>