<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 4</title>
</head>

<body id="body">

    <script type="text/javascript">
        let keyTabla = ["CodProd", "Nombre", "Descripión", "Peso", "Stock", "CodCat"];

        var xhttp = new XMLHttpRequest();

        xhttp.open("GET", "datos_pedidos.php", false);
        xhttp.send();
        imprimirDatos();

        async function imprimirDatos() {
            let datos = await JSON.parse(xhttp.response);
            imprimirTabla(datos);
        }

        function imprimirTabla(datos) {
            let tabla = document.createElement("table");
            let filaEnunciado = document.createElement("tr");
            for (let i = 0; i < keyTabla.length; i++) {
                let celda = document.createElement("th");
                celda.innerHTML = keyTabla[i];
                filaEnunciado.appendChild(celda);
            }
            tabla.appendChild(filaEnunciado);

            for (let i = 0; i < datos.length; i++) {
                let objeto = datos[i];
                let fila = document.createElement("tr");
                for (const [key, value] of Object.entries(objeto)) {
                    if (key == "CodProd" || key == "Nombre" || key == "Descripcion" || key == "Peso" || key == "Stock" || key == "CodCat") {
                        let celda = document.createElement("td");
                        celda.innerHTML = value;
                        fila.appendChild(celda);
                    }

                }
                tabla.appendChild(fila);

            }
            document.getElementById("body").appendChild(tabla);
        }
    </script>

    <style>
        * {
            text-align: center;
        }

        th,
        td {
            border: 1px solid black;
            padding: 4px;
        }

        table {
            margin: 0 auto;
        }

        th {
            background-color: lightcoral;
        }

        td {
            background-color: lightcyan;
        }
    </style>
</body>

</html>