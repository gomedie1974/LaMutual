<?php
$archivo = "sociosestacionamiento.csv";

$nombre = $_POST["nombre"];
$vehiculo = $_POST["vehiculo"];
$patente = $_POST["patente"];

$lineas = file($archivo, FILE_IGNORE_NEW_LINES);
$nuevoContenido = [];

foreach ($lineas as $linea) {
    list($n, $v, $p) = explode(",", $linea);

    if (trim($n) == trim($nombre)) {
        // Reemplazar línea
        $nuevoContenido[] = "$nombre,$vehiculo,$patente";
    } else {
        $nuevoContenido[] = $linea;
    }
}

file_put_contents($archivo, implode("\n", $nuevoContenido));

echo "Datos modificados correctamente.";
?>
