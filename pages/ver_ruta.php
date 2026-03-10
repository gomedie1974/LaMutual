<?php
$archivo = "sociosestacionamiento.csv";
echo "Ruta real del archivo: <br>";
echo realpath($archivo) ?: "El archivo NO existe o no está en esta carpeta.";
?>
