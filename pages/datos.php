<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

// Datos de conexión
$servername = "localhost";
$username = "c2510725";
$password = "BAkagi34se";
$database = "c2510725_socios";

// Conexión a MySQL
$conn = new mysqli($servername, $username, $password, $database);
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

$resultados = "";
$mensaje = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $dni = isset($_POST['dni']) ? trim($_POST['dni']) : '';
    $numeroSocio = isset($_POST['numeroSocio']) ? trim($_POST['numeroSocio']) : '';

    if ($dni === '' || $numeroSocio === '') {
        $mensaje = "Faltan datos: complete DNI y Número de socio.";
    } else {
        // Obtener nombre
        $apellidoNombre = "No encontrado";
        $sqlNombre = "SELECT apellidoNombre FROM cc130825 WHERE dni = ? AND numeroSocio = ?";
        if ($stmt = $conn->prepare($sqlNombre)) {
            $stmt->bind_param("ss", $dni, $numeroSocio);
            $stmt->execute();
            $resName = $stmt->get_result();
            if ($resName && $resName->num_rows > 0) {
                $rowN = $resName->fetch_assoc();
                $apellidoNombre = htmlspecialchars($rowN['apellidoNombre']);
            }
            $stmt->close();
        }

        // Obtener datos principales
        $sql = "SELECT fecha, cuota, detalle, concepto, monto 
        FROM cc130825
        WHERE dni = ? AND numeroSocio = ?
        ORDER BY STR_TO_DATE(
            CONCAT(
              '01-', 
              CASE 
                WHEN LEFT(fecha,3) = 'ENE' THEN '01'
                WHEN LEFT(fecha,3) = 'FEB' THEN '02'
                WHEN LEFT(fecha,3) = 'MAR' THEN '03'
                WHEN LEFT(fecha,3) = 'ABR' THEN '04'
                WHEN LEFT(fecha,3) = 'MAY' THEN '05'
                WHEN LEFT(fecha,3) = 'JUN' THEN '06'
                WHEN LEFT(fecha,3) = 'JUL' THEN '07'
                WHEN LEFT(fecha,3) = 'AGO' THEN '08'
                WHEN LEFT(fecha,3) = 'SEP' THEN '09'
                WHEN LEFT(fecha,3) = 'OCT' THEN '10'
                WHEN LEFT(fecha,3) = 'NOV' THEN '11'
                WHEN LEFT(fecha,3) = 'DIC' THEN '12'
                ELSE '00'
              END,
              '-20', RIGHT(fecha,2)
            ),
            '%d-%m-%Y'
        ) ASC";

        if ($stmt2 = $conn->prepare($sql)) {
            $stmt2->bind_param("ss", $dni, $numeroSocio);
            $stmt2->execute();
            $result = $stmt2->get_result();

            if ($result->num_rows > 0) {
              ob_start();
echo '<div class="container my-4">';
echo "<div class='card shadow-sm mb-4'>
        <div class='card-body text-center'>
          <h5 class='card-title text-primary mb-0'>$apellidoNombre</h5>
        </div>
      </div>";
echo '<div class="table-responsive">';
echo "<table class='table table-striped table-hover table-bordered align-middle mb-0'>"; // SIN margenes extra
echo "<thead class='table-dark'>
        <tr>
            <th>Fecha</th>
            <th>Cuota</th>
            <th>Detalle</th>
            <th>Comprobante</th>
            <th>Monto</th>
        </tr>
      </thead>";
echo "<tbody>";
 
$contadorFilas = 0;
$mesActual = null;
$subtotal = 0.00;
$totalGeneral = 0.00;

while ($row = $result->fetch_assoc()) {
    if ($mesActual !== $row["fecha"]) {
        if ($mesActual !== null) {
            echo "<tr class='table-secondary fw-bold'>
                    <td colspan='4'>Subtotal</td>
                    <td>$ " . number_format($subtotal, 2) . "</td>
                  </tr>";
        }
        $mesActual = $row["fecha"];
        $subtotal = 0;
    }

    $subtotal += floatval($row["monto"]);
    $totalGeneral += floatval($row["monto"]);

    echo "<tr>
            <td>" . htmlspecialchars($row["fecha"]) . "</td>
            <td>" . htmlspecialchars($row["cuota"]) . "</td>
            <td>" . htmlspecialchars($row["detalle"]) . "</td>
            <td>" . htmlspecialchars($row["concepto"]) . "</td>
            <td>$ " . number_format($row["monto"], 2) . "</td>
          </tr>";
}

echo "<tr class='fw-bold table-secondary text-center'>
        <td colspan='4'>Subtotal</td>
        <td>$ " . number_format($subtotal, 2) . "</td>
      </tr>";

echo "<tr class='fw-bold table-primary text-center'>
        <td colspan='4'>Total General</td>
        <td>$ " . number_format($totalGeneral, 2) . "</td>
      </tr>";
echo "</tbody>";
echo "</table>";
echo "</div>"; // table-responsive
echo "</div>"; // container
$resultados = ob_get_clean();

            } else {
                $mensaje = "No se encontraron resultados para DNI $dni y socio $numeroSocio.";
            }

            $stmt2->close();
        }
    }
}

$conn->close();
?>
<!DOCTYPE html>
<html lang="es">
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
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
  
    <!-- Bootstrap core CSS -->
    <link href="../assets/dist/css/bootstrap.min.css" rel="stylesheet">   
    <!-- Custom styles for this template -->
    <link href="headers.css" rel="stylesheet">
    <!-- Para PDF -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.9.3/html2pdf.bundle.min.js"></script>    <title>Consulta de Socios</title>

    <div id="form-alert" class="alert alert-danger text-center d-none" role="alert" style="font-size: 1.1rem;"></div>


    <style>
      .table td, .table th {
        vertical-align: middle;
        text-align: center;
      }
      .table td:nth-child(3) {
        text-align: left; /* Detalle */
      }

      .table {
          border-collapse: separate;
          border-spacing: 0;
          border-radius: 10px;
        }
           /* Responsive tabla */
        .table-responsive {
          max-height: 400px;     /* Altura fija para scroll */
          overflow-y: auto;      /* Scroll vertical */
          border-radius: 8px;
        }

        .table thead th {
          position: sticky;
          top: 0;
          background: linear-gradient(90deg, #0d6efd, #0a58ca); /* fondo sólido */
          color: white;
          z-index: 10;
        }



        .table tbody tr:nth-child(odd) {
          background-color: #f8f9fa;
        }

        .table tbody tr:hover {
          background-color: #d1e7fd !important;
          transform: scale(1.01);
          transition: 0.2s;
        }


      .table-hover tbody tr:hover {
        background-color: #d1e7fd;
        cursor: pointer;
      }

      .table-secondary {
        background-color: #e9ecef !important;
      }

      .table-primary {
        background-color: #cfe2ff !important;
        font-size: 1.1rem;
      }
      h2.section-title {
          font-weight: bold;
          text-align: center;
          margin-bottom: 1.5rem;
          color: #0d6efd;
        }

        .custom-form {
          max-width: 500px;
          margin: 0 auto;
          background: #ffffff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.08);
        }

        .custom-form label {
          font-weight: 600;
        }

        .custom-form input[type="text"] {
          border-radius: 6px;
        }

        .custom-form input[type="submit"] {
          width: 100%;
        }
        .custom-input {
          max-width: 250px;  /* límite del ancho */
          margin: 0 auto;    /* centra el input */
        }

        .member-name {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0d6efd;
          background: #f8f9fa;
          padding: 12px;
          margin-bottom: 1.5rem;
          border-radius: 8px;
          box-shadow: 0 3px 8px rgba(0,0,0,0.05);
        }
        /* Nombre y apellido */
        .member-name {
          text-align: center;
          font-size: 1.5rem;
          font-weight: 700;
          color: #0d6efd;
          background: #f8f9fa;
          padding: 12px;
          margin: 20px auto;
          border-radius: 8px;
          max-width: 500px;
          box-shadow: 0 3px 8px rgba(0,0,0,0.05);
        }

        /* Título del formulario */
        .form-title {
          background: linear-gradient(90deg, #0d6efd, #0a58ca);
          color: white;
          padding: 15px;
          border-radius: 8px;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);        }

     



 </style>
</head>
<body>


<?php
// Mostrar resultados si existen
if ($resultados) {
    echo $resultados;
}
?>

<!-- Mensaje de aviso/error -->
<?php if ($mensaje != ''): ?>
    <div class="alert alert-warning text-center" style="margin: 20px; font-size:1.1rem;">
        <?php echo $mensaje; ?>
    </div>
<?php endif; ?>

<hr>

<!-- Formulario -->
<div class="container my-4">
  <h2 class="form-title text-center">🔍 Detalle de gastos</h2>
  <p class="text-center"> <b>Fecha de actualización 13/08/2025</b></p>
  
  <div class="row justify-content-center g-4">
    
    <!-- Columna formulario -->
    <div class="col-md-4">
      <form method="POST" onsubmit="return validarFormulario();" class="p-4 rounded shadow-sm bg-white">
        
        <div class="mb-3 text-center">
          <label for="dniInput" class="form-label fw-bold">DNI</label>
          <input type="text" id="dniInput" name="dni" class="form-control custom-input" placeholder="Ingrese su DNI sin . ni ,">
        </div>

        <div class="mb-3 text-center">
          <label for="numeroSocioInput" class="form-label fw-bold">Número de Socio</label>
          <input type="text" id="numeroSocioInput" name="numeroSocio" class="form-control custom-input" placeholder="Ingrese su número de socio">
        </div>

        <div class="text-center mt-4">
          <button type="submit" class="btn btn-primary px-5">Buscar</button>
        </div>
      </form>
    </div>

    <!-- Columna datos bancarios fijos -->
   <div class="col-md-6">
  <div class="border-primary shadow-lg rounded p-4" style="background: #f8f9fa;">
    <h5 class="text-primary mb-4 fw-bold">
      <i class="fas fa-hand-holding-usd me-2"></i> Pagos por transferencia
    </h5>
    <p class="mb-3">
      <i class="fas fa-landmark fa-lg text-primary me-2"></i>
      <strong>Banco:</strong> Galicia
    </p>
    <p class="mb-3 d-flex align-items-center">
      <i class="fas fa-hashtag fa-lg text-primary me-2"></i>
      <strong>CBU: </strong> 
      <span id="cbu" style="letter-spacing: 2px; user-select: all; cursor: pointer;"> 0070055920000006288080</span>
      <button type="button" class="btn btn-sm btn-outline-primary ms-2" onclick="copyToClipboard('cbu')">Copiar</button>
    </p>

    <p class="mb-3">
      <i class="fas fa-id-card fa-lg text-primary me-2"></i> <!-- Para CUIT -->
      <strong>CUIT:</strong> <span style="letter-spacing: 2px;">30-64701754-8</span>
    </p>
    <p class="mb-0">
      <i class="fas fa-user-circle fa-lg text-primary me-2"></i> <!-- Titular persona o entidad -->
      <strong>Titular:</strong> Asociación Mutual del personal de La Nación
    </p>
  </div>
</div>

  </div>
</div>

<script>
function mostrarAlerta(tipo, mensaje) {
    var alerta = document.getElementById("mensajeAlerta");

    // Resetear clases y mostrar mensaje
    alerta.className = "alert text-center fade show";
    alerta.textContent = mensaje;

    // Aplicar color según tipo
    if (tipo === "error") {
        alerta.classList.add("alert-danger");
    } else if (tipo === "exito") {
        alerta.classList.add("alert-success");
    }

    alerta.classList.remove("d-none");
    alerta.style.opacity = "1";

    // Desaparecer después de 3 segundos
    setTimeout(function() {
        alerta.style.opacity = "0";
        setTimeout(function() {
            alerta.classList.add("d-none");
        }, 500);
    }, 3000);
}

function validarFormulario() {
    var dniInput = document.getElementById("dniInput").value.trim();
    var numeroSocioInput = document.getElementById("numeroSocioInput").value.trim();

    if (dniInput === "" || numeroSocioInput === "") {
        mostrarAlerta("error", "⚠️ Por favor, complete ambos campos (DNI y Número de socio).");
        return false;
    }

    // Mensaje de éxito antes de enviar
    mostrarAlerta("exito", "✅ Datos completos. Buscando información...");

    // Simular pequeña espera antes de enviar el formulario
    setTimeout(function() {
        document.querySelector("form").submit();
    }, 1000);

    return false; // prevenir envío inmediato
}
</script>

<style>
.custom-input {
    max-width: 250px;
    margin: 0 auto;
}
</style>

 <div id="navbar"></div>
    <script>
  fetch("navbar.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navbar").innerHTML = data;

      // Mover aquí el contenido de navbar.js
      const menuToggle = document.getElementById("menu-toggle");
      const menu = document.getElementById("menu");
      const menuClose = document.getElementById("menu-close");

      if (menuToggle && menu && menuClose) {
        menuToggle.addEventListener("click", function () {
          menu.classList.toggle("active");
        });

        menuClose.addEventListener("click", function () {
          menu.classList.remove("active");
        });
      }

      // Smooth scroll
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
          e.preventDefault();

          document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
          });
        });
      });
    });
</script>


<div id="footer"></div>
<script>
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      document.getElementById("footer").innerHTML = data;
    });
</script>


<!-- Toast de copia -->
<div class="position-fixed bottom-0 end-0 p-3" style="z-index: 1100">
  <div id="copyToast" class="toast align-items-center text-bg-primary border-0" role="alert" aria-live="assertive" aria-atomic="true">
    <div class="d-flex">
      <div class="toast-body" id="toastBody">
        Copiado al portapapeles
      </div>
      <button type="button" class="btn-close btn-close-white me-2 m-auto" data-bs-dismiss="toast" aria-label="Cerrar"></button>
    </div>
  </div>
</div>

    <script>
  // Inicializar el toast de Bootstrap (requiere Bootstrap 5)
  const copyToastEl = document.getElementById('copyToast');
  const copyToast = new bootstrap.Toast(copyToastEl);

  function copyToClipboard(id) {
    const text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text).then(() => {
      // Cambiar mensaje dinámicamente (opcional)
      document.getElementById('toastBody').textContent = `Copiado: ${text}`;
      copyToast.show();
    }).catch(() => {
      document.getElementById('toastBody').textContent = `Error al copiar`;
      copyToast.show();
    });
  }
</script>


</body>

</html>
