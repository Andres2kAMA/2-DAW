<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ejercicio 3</title>
</head>

<body id="body">

    <div id="div">

    </div>

    <script type="text/javascript">
        let keyTabla = ["CodProd", "Nombre", "Descripión", "Peso", "Stock", "CodCat"];
        let contador = 0;
        var xhttp = new XMLHttpRequest();

        xhttp.open("GET", "datos_pedidos.php", false);
        xhttp.send();
        imprimirDatos();

        async function imprimirDatos() {
            let datos = await JSON.parse(xhttp.response);
            imprimirPorPantalla(datos);
        }

        function imprimirPorPantalla(datos) {
            for (let i = 0; i < datos.length; i++) {
                let objeto = datos[i];
                let p = document.createElement("p");
                p.innerHTML = `El producto tiene los siguientes valores:`
                document.getElementById("div").appendChild(p);
                for (const [key, value] of Object.entries(objeto)) {
                    if (key == "CodProd" || key == "Nombre" || key == "Descripcion" || key == "Peso" || key == "Stock" || key == "CodCat") {
                        let p = document.createElement("p");
                        p.innerHTML = `${keyTabla[contador]}: ${value}`;
                        contador++;
                        document.getElementById("div").appendChild(p);
                    }

                }

                document.getElementById("div").appendChild(document.createElement("br"));
                contador = 0;

            }
        }
    </script>

</body>

</html>