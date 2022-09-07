//info productos
const btnmac = document.getElementById("botonMac");
btnmac.addEventListener("click", botonMac);


function botonMac() {
  Swal.fire({
      imageUrl: '../image/cafemac.png', 
      imageWidth: 500,
      imageHeight: 250,
      imageAlt: 'Custom image',
    })   
}

