<?php
require_once 'bd.php';
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $usu = comprobar_usuario($_POST["usuario"], $_POST["clave"]);
    if ($usu === false) {
        $err = true;
        $usuario = $_POST["usuario"];
    } else {
        session_start();
        $_SESSION["usuario"] = $usu;
        $_SESSION["carrito"] = [];
        header("Location: categorias.php");
        return;
    }
}
?>

<html>

<head>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="./estilos/estilo.css">
    <link rel="stylesheet" type="text/css" href="./estilos/estiloLogin.css">
    <title>Formulario Login</title>
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
        <input type="submit">
    </form>
    <!--
        ->Punto 1: Check
        ->Punto 2: Check
        ->Punto 3: 
        ->Punto 4: Check
        ->Punto 5: Check
        ->Punto 6: Check
        ->Punto 7: 
        ->Punto 8: 
         !-->
</body>

</html>