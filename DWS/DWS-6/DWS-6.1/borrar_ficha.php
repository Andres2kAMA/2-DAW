<?php

require_once 'bd.php';

eliminar_jugador($_GET['id']);

header("Location: jugadores.php");
