<?php require('cabecera.php') ?>
<html>

<head>
    <meta charset="UTF-8">
    <title>Formulario Login</title>
</head>

<body>
    <h1>Ver estadísticas</h1>

    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
        <select name="estadisticas" id="estadisticas">
            <option value="null">Elige Opción</option>
            <option value="partidos">Partidos</option>
            <option value="puntos">Puntos</option>
            <option value="rebotes">Rebotes</option>
            <option value="asistencias">Asistencias</option>
        </select>
        <br><br>
        <input type="submit"><br><br>
    </form>

    <?php
    require_once 'bd.php';

    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        if ($_POST['estadisticas'] != "null") {
            if ($_POST['estadisticas'] == "partidos") {
                header("Location: cant_partidos.php");
            }
            if ($_POST['estadisticas'] == "puntos") {
                header("Location: cant_puntos.php");
            }
            if ($_POST['estadisticas'] == "rebotes") {
                header("Location: cant_rebotes.php");
            }
            if ($_POST['estadisticas'] == "asistencias") {
                header("Location: cant_asistencias.php");
            }
        }
    }
    ?>

    <?php require('footer.php') ?>
</body>

</html>