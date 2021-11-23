<?php
function alumnoYaRegistrado($id, $arrayAlumnos)
{
    for ($i = 0; $i < count($arrayAlumnos); $i++) {
        if ($arrayAlumnos[$i] == $id) {
            return true;
        }
    }
    return false;
}

function alumnosSinTutorias($alumnosConTutorias)
{
    echo "Los alumnos que no han ido a tutorías son: <br>";
    for ($i = 0; $i < 41; $i++) {
        for ($j = 0; $j < count($alumnosConTutorias); $j++) {
            if ($i != $alumnosConTutorias[$j] && $i < 40) {
                echo "$i - ";
                break;
            } else if ($i != $alumnosConTutorias[$j] && $i == 40) {
                echo "$i.";
                break;
            }
        }
    }
    echo "<br><br>";
}

function alumnosMayorNumeroTutorias($alumnosConTutoriasRepetidas)
{
    $contador = 0;

    echo "Los alumnos que han tenido más tutorías son: <br>";
    foreach ($alumnosConTutoriasRepetidas as $key => $value) {
        if ($contador == 3) {
            break;
        } else {
            if ($contador != 2) {
                echo "$key - ";
            } else {
                echo "$key.";
            }
            $contador++;
        }
    }
}

$alumnosConTutorias = [];
$alumnosConTutoriasRepetidas = [];

$ficheroTexto = fopen("tutorias.txt", "r");
while (!feof($ficheroTexto)) {
    $lineaAComprobar = fgets($ficheroTexto);
    preg_match('!\d+!', $lineaAComprobar, $idAlumno);
    if (!alumnoYaRegistrado($idAlumno[0], $alumnosConTutorias)) {
        array_push($alumnosConTutorias, $idAlumno[0]);
        $alumnosConTutoriasRepetidas[$idAlumno[0]] = 1;
    } else {
        $alumnosConTutoriasRepetidas[$idAlumno[0]] += 1;
    }
}

arsort($alumnosConTutoriasRepetidas);

alumnosSinTutorias($alumnosConTutorias);
alumnosMayorNumeroTutorias($alumnosConTutoriasRepetidas);
