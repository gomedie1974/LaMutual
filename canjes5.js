const boton14 = document.getElementById("infoSoda");
boton14.addEventListener("click", infoSoda);

function infoSoda() {
  Swal.fire({
    
    imageUrl: '../image/valoressodastream.png',
    imageWidth: 900,
    imageHeight: 250,
    imageAlt: 'Custom image',
  })
  }

const boton15 = document.getElementById("infoLongvie");
boton15.addEventListener("click", infoLongvie);

function infoLongvie() {
  Swal.fire({
    
    imageUrl: '../image/infolongvie.png',
    imageWidth: 900,
    imageHeight: 250,
    imageAlt: 'Custom image',
  })
  }

  