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
        fetch(xhttp.response).then((respuesta) => {
            return respuesta.json();
        }).then((datos) => {
            console.log(datos);
        }).catch((error) => {
            console.log(error);
        })
    </script>

</body>

</html>