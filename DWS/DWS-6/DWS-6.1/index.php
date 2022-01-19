<?php

$base = mysqli_connect("127.0.0.1", "root", "", "pedidos");

if ($base) {
    echo "Conexión realizada.<br/>";
    echo "Información sobre el servidor: " . mysqli_get_host_info($base) . "<br/>";

    $resultado = mysqli_query($base, "SELECT * FROM restaurantes");
    if ($resultado == FALSE) {
        echo "Error en la ejecución de la consulta. <br/>";
    } else {
        echo "Nº restaurantes: " . mysqli_num_rows($resultado) . "<br/>";
    }
    if (mysqli_close($base)) {
        echo "Desconexión realizada. <br/>";
    } else {
        echo "Error en la desconexión";
    }
} else {
    printf("Error %d : %s.<br/>", mysqli_connect_errno(), mysqli_connect_error());
}
