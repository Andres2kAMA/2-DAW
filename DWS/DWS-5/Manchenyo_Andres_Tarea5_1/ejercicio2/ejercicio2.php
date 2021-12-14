<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 1</title>
</head>

<body>
    <form method="GET">
        Numero 1 <input type="number" id="numero1"><br><br>
        Numero 2 <input type="number" id="numero2"><br><br>
        <input type="button" id="boton" value="Sumar números">
    </form>
    <p id="respuesta">El resultado de la suma es: </p>

    <script type="text/javascript">
        function sumarNumeros(num1, num2) {
            var xhttp = new XMLHttpRequest();
            xhttp.open("GET", `sumar_numeros.php?numero1=${num1}&numero2=${num2}`, false);
            xhttp.send();
            document.getElementById("respuesta").innerHTML = "El resultado de la suma es: " + xhttp.response;

        }
        document.getElementById("boton").addEventListener("click", function() {
            let num1 = document.getElementById("numero1").value;
            let num2 = document.getElementById("numero2").value;
            sumarNumeros(num1, num2)
        }, false);
    </script>

</body>

</html>