const boton16 = document.getElementById("spoilerc");
  boton16.addEventListener("click", spoilerc);
  
  function spoilerc() {
    Swal.fire({
      
      imageUrl: '../image/detalleembarazada.png',
      imageWidth: 1000,
      imageHeight: 200,
      imageAlt: 'Custom image',
    })
    }