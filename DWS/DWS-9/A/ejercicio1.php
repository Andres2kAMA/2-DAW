<?php
$fichero = new DOMDocument();

$fichero->load("http://www.elmundo.es/rss/espana.xml");
$salida = array();
$mundo = $fichero->getElementsByTagName("item");

foreach ($mundo as $entry) {
    $nue = array();
    $nue["title"] = $entry->getElementsByTagName("title")[0]->nodeValue;
    $nue["creator"] = $entry->getElementsByTagName("creator")[0]->nodeValue;
    $salida[] = $nue;
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        td,
        th {
            border-style: 1px solid;
        }
    </style>
</head>

<body>
    <table>
        <tr>
            <td>Titulo</td>
            <td>Longitud</td>
        </tr>
        <?php
        foreach ($salida as $elemento) {
            $titulo = $elemento["title"];
            $lat = $elemento["creator"];
            echo "<tr><td>$titulo</td><td>$long</td></tr>";
        }
        ?>
    </table>
</body>

</html>