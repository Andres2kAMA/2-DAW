<?php
require_once 'bd.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usu = comprobar_usuario($_POST["usuario"], $_POST["clave"]);

    if ($usu === false) {
        $err = true;
        $usuario = $_POST["usuario"];
    } else {
        session_start();
        $_SESSION["usuario"] = $usu;
        header("Location: main.php");
        return;
    }
}
?>

<html>

<head>
    <meta charset="UTF-8">
    <title>Formulario Login</title>
    <link rel="stylesheet" type="text/css" href="./css/estilo.css">
    <link rel="stylesheet" type="text/css" href="./css/estiloLogin.css">
</head>

<body>
    <h1>Login</h1>
    <?php
    if (isset($_GET["redirigido"])) {
        echo "<p>Haga login para continuar</p>";
    }
    ?>
    <?php
    if (isset($err) and $err == true) {
        echo "<p>Revise usuario y contraseña</p>";
    }
    ?>
    <form action="<?php echo htmlspecialchars($_SERVER["PHP_SELF"]); ?>" method="POST">
        <label for="usuario">Usuario</label>
        <input value="<?php if (isset($usuario)) echo $usuario; ?>" id="usuario" name="usuario" type="text"><br><br>
        <label for="clave">Clave</label>
        <input id="clave" name="clave" type="password"><br><br>
        <input class="boton" type="submit">
    </form>
</body>

</html>