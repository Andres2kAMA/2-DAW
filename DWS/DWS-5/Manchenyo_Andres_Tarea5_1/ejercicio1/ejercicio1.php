<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>
</head>

<body>
    <p id="p"></p>
    <script type="text/javascript">
        var xhttp = new XMLHttpRequest();
        setInterval(function() {
            xhttp.open("GET", "generar_numero_aleatorio.php", false);
            xhttp.send();
            document.getElementById("p").innerHTML = xhttp.response;
        }, 5000);
    </script>

</body>

</html>