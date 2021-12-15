<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4</title>
</head>

<body>

    <script type="text/javascript">
        var xhttp = new XMLHttpRequest();

        xhttp.open("GET", "datos_pedidos.php", false);
        xhttp.send();
        imprimirDatos();

        async function imprimirDatos() {
            console.log((xhttp.response));

        }
    </script>

</body>

</html>