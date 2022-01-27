<?php
$file = __DIR__ . "factura.txt";
$nombreArchivo = basename($file);
header('Content-Type: application/octet-stream');
header("Content-Transfer-Encoding: Binary");
header("Content-disposition: attachment; filename=$nombreArchivo");
# Leer el archivo y sacarlo al navegador
readfile($file);
