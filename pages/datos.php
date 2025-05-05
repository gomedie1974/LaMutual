<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- SEO -->
    <title>Detalle de gastos</title>
    <meta name="keywords" content="mutual">
    <meta name="description" content="Asociacion mutual del personal de La Nacion">
    <!-- Whatsapp -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">      
    <!-- BOOTSTRAP -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <!-- pone el logo en la pestana -->
    <link rel="shortcut icon" href="../image/Logo Asociacion Mutual.JPG">
    <title>CSS</title>
    <link rel="stylesheet" href="../style/style.css">
    
    <!-- Bootstrap core CSS -->
    <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">   
    <!-- Custom styles for this template -->
    <link href="headers.css" rel="stylesheet">
    <!-- Para PDF -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>


    <title>Buscar por Número de dni</title>
    <style>
        .content-container {
            margin-left: 20px; /* Ajusta el margen izquierdo según tus necesidades */
            margin-right: 20px; /* Ajusta el margen derecho según tus necesidades */
        }
        .bd-placeholder-img {
          font-size: 1.125rem;
          text-anchor: middle;
          -webkit-user-select: none;
          -moz-user-select: none;
          user-select: none;
        }
  
        @media (min-width: 768px) {
          .bd-placeholder-img-lg {
            font-size: 3.5rem;
          }
        }
        /* Alineo algunos campos */
        th:nth-child(1), td:nth-child(1) {
        text-align: center;
        }
        th:nth-child(2), td:nth-child(2) {
            text-align: center;
            }
        th:nth-child(3), td:nth-child(3) {
            text-align: center;
            }
        th:nth-child(4), td:nth-child(4) {
            text-align: center;
            }
        th:nth-child(5), td:nth-child(5) {
            text-align: center;
            }
        th:nth-child(6), td:nth-child(6) {
        text-align: center;
        }
    
        table {
            border-collapse: collapse;
            width: 100%;
            font-family: 'Udemy Sans', 'SF Pro Text', 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';            
        }
        th {
            position: sticky;
            top: 0;
            background-color: #f2f2f2;  
        }
        table, th, td {
            border: 1px solid black;
        }
        #volverContainer {
            text-align: right;
            margin-top: 10px;
            margin-right: 20px;
        }
    
        .info-box {
            float: right; /* Alinea el cuadro a la derecha */
            width: 300px; /* Ajusta el ancho según tus necesidades */
            padding: 1px;
            border: 1px solid #800404;
            border-radius: 5px;
            margin-left: 20px; /* Espacio entre el título y el cuadro */
            margin-right: 40px;
            box-sizing: border-box; /* Incluye el padding y border en el ancho y alto */
            margin-top: -10px; /* Ajusta este valor para subir o bajar el cuadro */ 
        }
                /* Media query para hacer el cuadro responsive */
        @media (max-width: 767px) {
            .info-box {
                float: none; /* Desactiva la alineación a la derecha */
                width: 90%; /* Ocupa todo el ancho disponible */
                /* margin-left: 0; */ /* Elimina el margen izquierdo */
                margin-top: 10px; /* Ajusta el espacio entre el título y el cuadro */
            }
        }
        
      #tablaDatos {
        width: 100%;
        border-collapse: collapse; /* Elimina los espacios entre celdas */
        margin-top: 20px;
        text-align: center;
        background-color: #f9f9f9;
    }

    #tablaDatos th, #tablaDatos td {
        border: 1px solid #ccc; /* Borde para celdas */
        padding: 10px;
        text-align: center;
    }

    #tablaDatos th {
        background-color: #007bff; /* Color de encabezado */
        color: #ffffff; /* Texto blanco */
        font-weight: bold;
    }

    #tablaDatos tr:nth-child(even) {
        background-color: #f2f2f2; /* Color para filas pares */
    }

    .subtotal-row {
        font-weight: bold;
    }

    .total-general {
        background-color:rgb(113, 175, 242);
        color:rgb(18, 15, 15);
        font-weight: bold;
    }
    .page-break {
    page-break-before: always; /* Hace que el contenido siguiente empiece en una nueva página */
    margin: 0;
    padding: 0;
    line-height: 1;
    }
  
    </style>
</head>
<body>
<a href="https://api.whatsapp.com/send?phone=5491139546021" target="_blank" class="whatsapp-icon" >
    <!-- Ícono de WhatsApp -->
    <i class="fab fa-whatsapp"></i>
  </a>
<nav class="navbar navbar-dark  bg-secondary">    
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Detalle de Gastos</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <li class="nav-item">
                  <hr class="bg-light">
                  <li class="nav-item dropdown ">
                    <a class="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false">Descuentos</a>
                  <ul class="dropdown-menu"> 
                  <li><a href="../pages/almacen.html" class="nav-link px-2 text-white bg-secondary">Almacen</a></li>    
                  <li><a href="../pages/aperitivos.html" class="nav-link px-2 text-white bg-secondary">Bebidas</a></li>    
                  <li><a href="../pages/canjes.html" class="nav-link px-2 text-white bg-secondary">Canjes</a></li>
                  <li><a href="../pages/feria.html" class="nav-link px-2 text-white bg-secondary">Feria</a></li>  
                  <li><a href="../pages/hogar.html" class="nav-link px-2 text-white bg-secondary">Hogar</a></li>
                  <li><a href="../pages/juegos.html" class="nav-link px-2 text-white bg-secondary">Juegos</a></li>
                  <li><a href="../pages/puravida.html" class="nav-link px-2 text-white bg-secondary">Pura Vida</a></li>
                    </ul> 
                  </li>
                  
                    <a class="nav-link active" aria-current="page" href="../pages/ayudaeconomica.html">Ayuda Económica</a>
                    <a class="nav-link active" aria-current="page" href="../pages/colecciones.html">Colecciones LN</a>
                    <a class="nav-link active" aria-current="page" href="../pages/productos.html">Productos</a>
                    <a class="nav-link active" aria-current="page" href="../pages/subsidios.html">Subsidios</a>
                    <a class="nav-link active" aria-current="page" href="../pages/asociarse.html">Asociarse</a>
                    <a class="nav-link active" aria-current="page" href="../pages/contacto.html">Contacto</a>
                    <hr class="bg-light">
                    <a class="nav-link active" aria-current="page" href="../index.html">Home</a>
                  </li>
              </li>
            </ul> 
          </div>
        </div>
      </nav>
      <br> 
<br> 
      <div >
        <p style=" text-align: center; color: rgb(0, 0, 0); font-size: 130%; font-family: prumo;"><b><u>DETALLE DE GASTOS</u></b></p>
        <p style="text-align: center">Última actualización: <strong style="color: red;">05/05/2025 13:00 hs</strong></p>
          <!-- <p style="text-align: center; color: blue"><b><u>PRÓXIMA ACTUALIZACIÓN 03/02/2025 </u></b></p> -->
          <!-- Agrega el cuadro de información al lado derecho del título -->
        <div class="info-box">
            <span>Pago por transferencia </span>  <button id="infocbu" class="btn btn-primary btn-sm">CBU</button><br>
            <span ><b><u>Fechas de pago</u></b> <br>ADHERENTES y JUBILADOS<strong><br> 1 al 8 de cada mes</strong></span>
        </div><br>
    </div>

    
<div class="content-container">
    <form action="" method="post" onsubmit="return validarFormulario()">
        <label for="numeroSocioInput">DNI (sin . ni ,):</label>
        <input type="text" id="dniInput" name="dni" required style="width: 100px;" autocomplete="off">
           
        <label for="numeroSocioInput">Socio:</label>
        <input type="text" id="numeroSocioInput" name="numeroSocio" required style="width: 50px; margin-right: 10px;" autocomplete="off">
         <button class='btn btn-dark btn-sm' type='submit' >Buscar </button>
         
    </form>
</div>

<?php
// Crear la conexión a la base de datos
$servername = "localhost";
$username = "c2510725";
$password = "BAkagi34se";
$database = "c2510725_socios";

$conn = new mysqli($servername, $username, $password, $database);

// Verificar la conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}



// Verifico si se envió el formulario  
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Obtener los datos del formulario
    $dni = $_POST["dni"];
    $numeroSocio = $_POST["numeroSocio"];
 

     // Obtengo el apellido y nombre desde la base de datos
     $sqlNombre = "SELECT apellidoNombre FROM cc050525 WHERE dni = '$dni' AND numeroSocio = '$numeroSocio'";
     $resultNombre = $conn->query($sqlNombre);
     if ($resultNombre->num_rows > 0) {
         $rowNombre = $resultNombre->fetch_assoc();
         $apellidoNombre = $rowNombre["apellidoNombre"];
     } else {
         $apellidoNombre = "No encontrado"; // Puedes ajustar este valor predeterminado según sea necesario
     }            
        // Consulta SQL para recuperar datos filtrados
        $sql = "SELECT dni,numeroSocio, apellidoNombre, fecha, cuota, detalle, concepto, monto 
                FROM cc050525               
                WHERE dni = '$dni' AND numeroSocio = '$numeroSocio' ";
        $result = $conn->query($sql);
        
        // Variable para almacenar el subtotal
        $subTotal = 0;
        // Variable para almacenar el mes actual
        $mesActual = null;
        // Variable para almacenar el total general
        $totalGeneral = 0;
        
        if ($result->num_rows > 0) {
            echo '<div style="margin: 20px;"><br><br>'; // Inicio del contenedor con margen
            // Mostrar el apellido y nombre
            echo "<div style='text-align: center; font-weight: bold; font-size: 18px;'>$apellidoNombre</div> ";


            echo "<table id='tablaDatos' border='1'>
                    <tr>
                        <th>Fecha</th>
                        <th>Cuota</th>
                        <th>Detalle</th>
                        <th>Comprobante</th>
                        <th>Monto</th>
                    </tr>";
          
                    
// Contador de filas
$contadorFilas = 0;

while ($row = $result->fetch_assoc()) {
    // Salto de página cada 15 filas
    if ($contadorFilas % 13 == 0 && $contadorFilas != 0) {
        echo "<tr><td colspan='5'><div class='page-break'></div></td></tr>";
    }

    // Verificar si la fecha ha cambiado para agregar un subtotal
    if ($mesActual !== $row["fecha"]) {
        if ($mesActual !== null) {
            echo "<tr class='subtotal-row'>
                    <td colspan='4'>Subtotal</td> 
                    <td>$ " . number_format($subtotal, 2) . "</td>
                  </tr>";
        }
        $mesActual = $row["fecha"];
        $subtotal = 0;
    }

    $subtotal += $row["monto"];
    $totalGeneral += $row["monto"];

    // Imprimir fila con datos
    echo "<tr>
            <td>" . $row["fecha"] . "</td>
            <td>" . $row["cuota"] . "</td>
            <td>" . $row["detalle"] . "</td>
            <td>" . $row["concepto"] . "</td>
            <td>$ " . number_format($row["monto"], 2) . "</td>
          </tr>";

    $contadorFilas++;
}

        
            // Agregar el último subtotal y el total general
            echo "<tr class='subtotal-row'>
                  <td colspan='4'>Subtotal</td> <!-- Ajustar el número de celdas -->
                  <td >$ " . number_format($subtotal, 2) . "</td>
                  </tr>";
            echo "<tr class='total-general'>
                  <td colspan='4' ><br>Total General</td>
                  <td><br> $ " . number_format($totalGeneral, 2) .  "</td> 
                  </tr>";
        
            echo "</table>";
        } else {
            echo "<br> <spam style='margin: 20px;' > <b>No se encontraron resultados.</b></spam><br> ";
        }
      }
 
// Cerrar la conexión
$conn->close();
?>

<script>
     //informacion CBU
     const boton1 = document.getElementById("infocbu");
      boton1.addEventListener("click", infocbu);
      function infocbu() {
              Swal.fire({
                  imageUrl: '../image/CBU.png',
                  imageWidth: 400,
                  imageHeight: 200,
                  })   
                }
function validarFormulario() {
    var numeroSocioInput = document.getElementById("numeroSocioInput").value;
    var apellidoNombreInput = document.getElementById("apellidoNombreInput").value;

    if (numeroSocioInput.trim() === "" || apellidoNombreInput.trim() === "") {
        alert("Por favor, complete ambos campos.");
        return false;
    }

    if (apellidoNombreInput.length < 5) {
        alert("El campo 'Apellido y Nombre' es erroneo.");
        return false;
    }

    return true;
}                               
</script>
<br>


<style>
       #spinner-container {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            display: none;
        }

        #spinner {
            width: 100px; /* Ajusta el ancho según sea necesario */
            height: 100px; /* Ajusta la altura según sea necesario */
        }
  </style>

 <!-- Botón para descargar como PDF -->
 <button class='btn btn-primary m-2' onclick="descargarPDF()">Descargar como PDF</button>

<!-- Spinner Container (por defecto oculto) -->
<div id="spinner-container" style="display: none;">
    <div id="spinner">
        <img src="../image/loading.gif" alt="Loading..." />
    </div>
</div>

<script>
    function descargarPDF() {
        // Desplazar la pantalla hacia el inicio
        document.documentElement.scrollTop = 0;

        // Mostrar el spinner al iniciar la descarga
        document.getElementById("spinner-container").style.display = "block";

        const element = document.getElementById("tablaDatos");
        html2pdf(element);

        // Ocultar el spinner cuando la descarga haya finalizado
        setTimeout(function() {
            document.getElementById("spinner-container").style.display = "none";
        }, 5000); // Ajusta el tiempo según sea necesario
    }
  </script>



<div id="footer"></div>
<script>
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
</script>




  <!-- JAVA -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  <script src="//cdn.jsdelivr.net/npm/sweetalert2@11"></script>

</body>
</html>