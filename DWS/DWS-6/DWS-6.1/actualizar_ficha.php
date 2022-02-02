<?php
require_once 'bd.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $id = $_POST["id"];
    $nombre = $_POST["nombre"];
    $posicion = $_POST["posicion"];
    $partidos = $_POST["partidos"];
    $puntos = $_POST["puntos"];
    $rebotes = $_POST["rebotes"];
    $asistencias = $_POST["asistencias"];

    actualizar_datos_jugador($id, $nombre, $posicion, $partidos, $puntos, $rebotes, $asistencias);
    header("Location: jugadores.php");
}
?>

<html>

<head>
    <meta charset="UTF-8">
    <title>Formulario Login</title>
</head>

<body>
    <h1>Actualizar jugador</h1>
    <?php
    if (isset($_GET['id'])) {
        $id = $_GET['id'];
    } ?>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
        <label for="nombre">Nombre</label>
        <input id="nombre" name="nombre" type="text"><br><br>
        <label for="posicion">Posición</label>
        <input id="posicion" name="posicion" type="text"><br><br>
        <label for="partidos">Partidos</label>
        <input id="partidos" name="partidos" type="number"><br><br>
        <label for="puntos">Puntos</label>
        <input id="puntos" name="puntos" type="number"><br><br>
        <label for="rebotes">Rebotes</label>
        <input id="rebotes" name="rebotes" type="number"><br><br>
        <label for="asistencias">Asistencias</label>
        <input id="asistencias" name="asistencias" type="number"><br><br>
        <input id="id" name="id" value="<?php echo $id ?>" type="hidden"><br><br>
        <input type="submit">
    </form>
</body>

</html>