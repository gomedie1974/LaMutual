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

const btnrum = document.getElementById("botonRum");
btnrum.addEventListener("click", botonRum);


function botonRum() {
  Swal.fire({
      imageUrl: '../image/ruminfo.png', 
      imageWidth: 600,
      imageHeight: 320,
      imageAlt: 'Custom image',
    })   
}

