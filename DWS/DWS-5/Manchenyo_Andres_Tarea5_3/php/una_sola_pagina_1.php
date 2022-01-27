<!DOCTYPE html>
<html>

<head>
    <title>Formulario de login</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="../estilos/estilo.css">
    <link rel="stylesheet" type="text/css" href="../estilos/estiloLogin.css">
    <link rel="stylesheet" type="text/css" href="../estilos/estiloCategorias.css">
    <script type="text/javascript" src="../js/sesion.js"></script>
    <script type="text/javascript" src="../js/cargarDatos.js"></script>
</head>

<body>
    <section id="login">
        <form onsubmit="return login()" method="POST">
            Usuario: <input id="usuario" type="text">
            Clave: <input id="clave" type="password">
            <input type="submit">
        </form>
    </section>
    <section id="principal" style="display:none">
        <header>
            <?php require 'cabecera_json.php'; ?>
        </header>
        <h2 id="titulo"></h2>
        <?php require 'informacionPedido.php'; ?>
        <section id="contenido"></section>
    </section>
    <!--
    a-- > Check 1,5
    b-- > Check 0,5
    c-- > Check 0,5
    d-- > 
    e-- > Check 0,5
    f-- > Check 1
    g-- > Check 1,5 revisar pedidos
    h-- > 
    i-- > ---------
    j-- > Check 0,5
    !-->
</body>

</html>