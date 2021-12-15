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
        fetch("datos_pedidos.php")
            .then((Response) => Response.json())
            .then((datos) => {
                console.log(datos);
            })
            .catch(function(err) {
                console.log(err);
            });
    </script>

</body>

</html>