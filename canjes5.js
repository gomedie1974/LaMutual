const boton14 = document.getElementById("infoSoda");
boton14.addEventListener("click", infoSoda);

function infoSoda() {
  Swal.fire({
    
    imageUrl: '../image/valoressodastream.png',
    imageWidth: 800,
    imageHeight: 150,
    imageAlt: 'Custom image',
  })
  }

  