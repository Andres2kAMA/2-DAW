<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script type="text/javascript" src="js/cargarDatos.js"></script>
    <script type="text/javascript" src="js/sesion.js"></script>
    <title>Formulario de login</title>
</head>

<body>
    <section id="login">
        <form onsubmit="return login()" method="POST">
            Usuario <input id="usuario" type="text">
            Clave <input id="clave" type="password">
            <input type="submit">
        </form>
    </section>
    <section id="principal" style="display: none;">
        <header>
            <?php require "cabecera_json.php" ?>
        </header>
        <h2 id="titulo"></h2>
        <section id="contenido"></section>
    </section>
</body>

</html>