<?php
$archivo = "sociosestacionamiento.csv";

$nombre = trim($_POST["nombre"]);

$lineas = file($archivo, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
$nuevoContenido = [];
$encontrado = false;

foreach ($lineas as $linea) {
    list($n, $v, $p) = explode(",", $linea);

    if (trim($n) == $nombre) {
        $encontrado = true; // No lo agregamos → se elimina
        continue;
    }

    $nuevoContenido[] = $linea;
}

file_put_contents($archivo, implode("\n", $nuevoContenido));

echo $encontrado ? "Socio eliminado correctamente." : "No se encontró el socio.";
?>
