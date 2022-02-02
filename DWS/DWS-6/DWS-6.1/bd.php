<?php

define("CADENA_CONEXION", 'mysql:dbname=baloncesto;host=127.0.0.1');
define("USUARIO_CONEXION", 'root');
define("CLAVE_CONEXION", '');

function comprobar_usuario($nombre, $clave)
{
    try {
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

        $ins = "SELECT nombre,clave FROM usuarios WHERE nombre='$nombre' and clave='$clave'";
        $resul = $bd->query($ins);

        if ($resul->rowCount() === 1) {
            return true;
        } else {
            return false;
        }
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
}

function cargar_jugadores_puntos()
{
    try {
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

        $ins = "SELECT * FROM jugadores WHERE puntos > 12";
        $resul = $bd->query($ins);
        if (!$resul) {
            return false;
        }
        if ($resul->rowCount() === 0) {
            return false;
        }
        return $resul;
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
}

function cargar_jugadores_rebotes()
{
    try {
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

        $ins = "SELECT * FROM jugadores WHERE rebotes > 6";
        $resul = $bd->query($ins);
        if (!$resul) {
            return false;
        }
        if ($resul->rowCount() === 0) {
            return false;
        }
        return $resul;
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
}

function cargar_jugadores_asistencias()
{
    try {
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

        $ins = "SELECT * FROM jugadores WHERE asistencias > 5";
        $resul = $bd->query($ins);
        if (!$resul) {
            return false;
        }
        if ($resul->rowCount() === 0) {
            return false;
        }
        return $resul;
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
}

function cargar_bases_asistencias()
{
    try {
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

        $ins = "SELECT * FROM jugadores WHERE posicion ='base' AND asistencias > 8";
        $resul = $bd->query($ins);
        if (!$resul) {
            return false;
        }
        if ($resul->rowCount() === 0) {
            return false;
        }
        return $resul;
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
}


function cargar_escoltas_aleros_puntos()
{
    try {
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

        $ins = "SELECT * FROM jugadores WHERE puntos > 15 AND posicion='escolta' OR posicion='alero'";
        $resul = $bd->query($ins);
        if (!$resul) {
            return false;
        }
        if ($resul->rowCount() === 0) {
            return false;
        }
        return $resul;
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
}


function cargar_pivots_rebotes()
{
    try {
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

        $ins = "SELECT * FROM jugadores WHERE rebotes > 7 AND posicion='ala pivot' OR posicion='pivot'";
        $resul = $bd->query($ins);
        if (!$resul) {
            return false;
        }
        if ($resul->rowCount() === 0) {
            return false;
        }
        return $resul;
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
}



function cargar_todos_jugadores()
{
    try {
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

        $ins = "SELECT * FROM jugadores ORDER BY posicion";
        $resul = $bd->query($ins);
        if (!$resul) {
            return false;
        }
        if ($resul->rowCount() === 0) {
            return false;
        }
        return $resul;
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
}

function obtener_jugador($id)
{
    try {
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

        $ins = "SELECT * FROM jugadores WHERE id=$id";
        $resul = $bd->query($ins);
        if (!$resul) {
            return false;
        }
        if ($resul->rowCount() === 0) {
            return false;
        }
        return $resul;
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
}

function actualizar_datos_jugador($id, $nombre, $posicion, $partidos, $puntos, $rebotes, $asistencias)
{
    try {
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

        $ins = "UPDATE jugadores SET nombre='$nombre', posicion='$posicion', partidos=$partidos, puntos=$puntos, rebotes=$rebotes, asistencias=$asistencias WHERE id=$id";
        $resul = $bd->query($ins);
        if (!$resul) {
            return false;
        }
        if ($resul->rowCount() === 0) {
            return false;
        }
        return $resul;
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
}

function eliminar_jugador($id)
{
    try {
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

        $ins = "DELETE FROM jugadores WHERE id=$id";
        $resul = $bd->query($ins);
        if (!$resul) {
            return false;
        }
        if ($resul->rowCount() === 0) {
            return false;
        }
        return $resul;
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
}


function obtener_jugadores_ordenados_partidos()
{
    try {
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

        $ins = "SELECT * FROM jugadores ORDER BY partidos DESC";
        $resul = $bd->query($ins);
        if (!$resul) {
            return false;
        }
        if ($resul->rowCount() === 0) {
            return false;
        }
        return $resul;
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
}

function obtener_jugadores_ordenados_puntos()
{
    try {
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

        $ins = "SELECT * FROM jugadores ORDER BY puntos DESC";
        $resul = $bd->query($ins);
        if (!$resul) {
            return false;
        }
        if ($resul->rowCount() === 0) {
            return false;
        }
        return $resul;
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
}

function obtener_jugadores_ordenados_rebotes()
{
    try {
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

        $ins = "SELECT * FROM jugadores ORDER BY rebotes DESC";
        $resul = $bd->query($ins);
        if (!$resul) {
            return false;
        }
        if ($resul->rowCount() === 0) {
            return false;
        }
        return $resul;
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
}

function obtener_jugadores_ordenados_asistencias()
{
    try {
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

        $ins = "SELECT * FROM jugadores ORDER BY asistencias DESC";
        $resul = $bd->query($ins);
        if (!$resul) {
            return false;
        }
        if ($resul->rowCount() === 0) {
            return false;
        }
        return $resul;
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
}


function  anadir_jugador($nombre, $posicion, $partidos, $puntos, $rebotes, $asistencias)
{
    try {
        $bd = new PDO(CADENA_CONEXION, USUARIO_CONEXION, CLAVE_CONEXION);

        $ins = "INSERT INTO jugadores (nombre,posicion,partidos,puntos,rebotes,asistencias) VALUES ('$nombre','$posicion', $partidos, $puntos, $rebotes, $asistencias);";
        $resul = $bd->query($ins);
        if (!$resul) {
            return false;
        }
        if ($resul->rowCount() === 0) {
            return false;
        }
        return $resul;
    } catch (PDOException $e) {
        echo 'Error con la base de datos: ' . $e->getMessage();
    }
}
