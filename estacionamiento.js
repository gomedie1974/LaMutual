// JS   con “ofuscación” básica
const encodedPassword = "bGFkZ3M1NQ==";  

function showPasswordPrompt() {
  const passwordForm = document.getElementById("passwordForm");
  const optionsDiv = document.getElementById("optionsDiv");
  const parkingButton = document.getElementById("parkingButton");
  const procesos = document.getElementById("procesos");

  passwordForm.style.display = "block";

  const passwordInputForm = document.getElementById("passwordInputForm");

  passwordInputForm.onsubmit = function(event) {
    event.preventDefault();
    const enteredPassword = document.getElementById("password").value;

    // decodificar la clave correcta
    const correctPassword = atob(encodedPassword);

    if (enteredPassword === correctPassword) {
      passwordForm.style.display = "none";
      optionsDiv.style.display = "block";

      parkingButton.onclick = function() {
        window.location.href = "./pages/estacionamiento.html";
      };
      procesos.onclick = function() {
        window.location.href = "./pages/procesos.html";
      };
    } else {
      alert("Clave incorrecta. Acceso denegado.");
    }
  };
}






window.addEventListener('DOMContentLoaded', event => {

  // Activate Bootstrap scrollspy on the main nav element
  const sideNav = document.body.querySelector('#sideNav');
  if (sideNav) {
      new bootstrap.ScrollSpy(document.body, {
          target: '#sideNav',
          offset: 74,
      });
  };

  // Collapse responsive navbar when toggler is visible
  const navbarToggler = document.body.querySelector('.navbar-toggler');
  const responsiveNavItems = [].slice.call(
      document.querySelectorAll('#navbarResponsive .nav-link')
  );
  responsiveNavItems.map(function (responsiveNavItem) {
      responsiveNavItem.addEventListener('click', () => {
          if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
          }
      });
  });

});

/* GENERAR CODIGO QR */

function generarCodigoAleatorio() {
          var caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
          var codigo = '';
          for (var i = 0; i < 6; i++) {
              var randomIndex = Math.floor(Math.random() * caracteres.length);
              codigo += caracteres.charAt(randomIndex);
          }
          return codigo;
      }

      
      function generarCodigosQR() {
        var nombre = document.getElementById("nombre").value;
        var vehiculo = document.getElementById("vehiculo").value;
        var patente = document.getElementById("patente").value;
        var cantidad = parseInt(document.getElementById("cantidad").value, 10);
        var codigosGenerados = [];
      
        if (nombre.trim() === "") {
          alert("Por favor, ingrese un nombre antes de generar códigos.");
          return; // Detener la función si el nombre está vacío
        }
        if (vehiculo.trim() === "") {
          alert("Por favor, ingrese datos del vehículo antes de generar códigos.");
          return; // Detener la función si el nombre está vacío
        }
        if (patente.trim() === "") {
          alert("Por favor, ingrese un número de patente antes de generar códigos.");
          return; // Detener la función si el nombre está vacío
        }
      
        for (var i = 0; i < cantidad; i++) {
          var codigo = generarCodigoAleatorio();
          var codigoDeCompra = codigo;
          var fechaGeneracion = new Date().toLocaleString(); // Obtenemos la fecha actual
      
          // Calcular la fecha de vencimiento (60 días después)
          var fechaVencimiento = new Date();
          fechaVencimiento.setDate(fechaVencimiento.getDate() + 60);
      
          // Formatear la fecha de vencimiento en el mismo formato que la fecha de generación
          var fechaVencimientoFormateada = fechaVencimiento.toLocaleString();
      
          codigosGenerados.push({
            codigo: codigoDeCompra,
            nombre: nombre,
            vehiculo: vehiculo,
            patente: patente,
            fecha: fechaGeneracion,
            fechaVencimiento: fechaVencimientoFormateada, // Agregar fecha de vencimiento
            sello: '',
            firma: ''
          });
        }
      
        mostrarCodigosQR(codigosGenerados);
      }
      
      function mostrarCodigosQR(codigos) {
  var codigosDiv = document.getElementById("codigos");
  codigosDiv.innerHTML = "";

  for (var i = 0; i < codigos.length; i++) {
    var codigoDiv = document.createElement("div");
    var codigoQRDiv = document.createElement("div");

    codigoQRDiv.id = "qrcode" + i;
    codigosDiv.appendChild(codigoQRDiv);

    codigoDiv.innerHTML += `<span style="margin-left: 20px;"> Nombre: ${codigos[i].nombre}</span><br>`;
    codigoDiv.innerHTML += `<span style="margin-left: 20px;"> Código: ${codigos[i].codigo}</span><br>`;
    codigoDiv.innerHTML += `<span style="margin-left: 20px;"> Vehículo: ${codigos[i].vehiculo}</span><br>`;
    codigoDiv.innerHTML += `<span style="margin-left: 20px;"> Patente: ${codigos[i].patente}</span><br>`;
    codigoDiv.innerHTML += `<span style="margin-left: 20px;"> Fecha de generación: ${codigos[i].fecha}</span><br>`;
    codigoDiv.innerHTML += `<span style="margin-left: 20px;"> Fecha de vencimiento: ${codigos[i].fechaVencimiento}</span><br><br>`;

    // ✅ Agregar sello como imagen en vez de solo texto
    codigoDiv.innerHTML += `
      <div style="display:flex; align-items:center; margin-left:20px; gap:100px;">
        <div>
          <span>Sello:</span><br>
          <img src="../image/SELLO.png" alt="Sello" style="width:80px; margin-top:5px;">
        </div>
        <div>
          <span>Firma:</span><br><br><br> <!-- espacio para firmar -->
        </div>
      </div>
      <hr>
    `;

    // Aplicar margen al contenedor del QR
    codigoQRDiv.style.marginLeft = "120px";

    codigosDiv.appendChild(codigoDiv);

    // Generar el QR
    var qrcode = new QRCode(codigoQRDiv, {
      text: codigos[i].codigo,
      width: 100,
      height: 100,
    });
  }
}

         
/* IMPRIMIR CODIGO QR */

function imprimirCodigosQR() {
  var codigosDiv = document.getElementById("codigos");
  var ventanaImpresion = window.open('', '', 'width=600,height=600');
  ventanaImpresion.document.open();
  ventanaImpresion.document.write('<html><head><title>Códigos QR</title></head><body>');
  ventanaImpresion.document.write(codigosDiv.innerHTML);
  ventanaImpresion.document.write('</body></html>');
  ventanaImpresion.document.close();
  ventanaImpresion.print();
  ventanaImpresion.close();
}   