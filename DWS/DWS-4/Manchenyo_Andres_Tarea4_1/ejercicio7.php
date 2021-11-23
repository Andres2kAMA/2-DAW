<?php
function esNumeroPar($numero)
{
    if ($numero % 2 == 0) {
        return true;
    }
    return false;
}

$todosNumeros = fopen("numeros.txt", "r");

$numerosPares = fopen("pares.txt", "w");
$numerosImpares = fopen("impares.txt", "w");

while (!feof($todosNumeros)) {
    $numeroIndividual = fscanf($todosNumeros, "%d");
    if (esNumeroPar($numeroIndividual[0])) {
        fwrite($numerosPares,  $numeroIndividual[0]);
    } else {
        fwrite($numerosImpares, $numeroIndividual[0]);
    }
}
