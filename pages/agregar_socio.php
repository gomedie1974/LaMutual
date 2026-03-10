<?php
$archivo = "sociosestacionamiento.csv";

// Leer datos enviados
$nombre = $_POST["nombre"];
$vehiculo = $_POST["vehiculo"];
$patente = $_POST["patente"];

// Armar línea CSV
$nuevaLinea = "$nombre,$vehiculo,$patente\n";

// Guardar agregando al final
file_put_contents($archivo, $nuevaLinea, FILE_APPEND);

echo "Persona agregada correctamente.";
?>
