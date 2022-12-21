const btnrum = document.getElementById("infoSoda");
btnrum.addEventListener("click", infoSoda);


function infoSoda() {
  Swal.fire({
      imageUrl: '../image/valoressodastream.png', 
      imageWidth: 600,
      imageHeight: 320,
      imageAlt: 'Custom image',
    })   
}

