/* PRIMER SLIDE SODA */
    const slides = document.querySelectorAll('.slider img');
    const anteriorBtn = document.getElementById('anterior');
    const siguienteBtn = document.getElementById('siguiente');
    let indice = 0;

    function mostrarSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.style.display = 'block';
            } else {
                slide.style.display = 'none';
            }
        });
    }
    function avanzarSlide() {
        indice++;
        if (indice === slides.length) {
            indice = 0;
        }
        mostrarSlide(indice);
    }
    function retrocederSlide() {
        indice--;
        if (indice < 0) {
            indice = slides.length - 1;
        }
        mostrarSlide(indice);
    }

    mostrarSlide(indice);
    siguienteBtn.addEventListener('click', avanzarSlide);
    anteriorBtn.addEventListener('click', retrocederSlide);

    document.addEventListener("DOMContentLoaded", function() {
    var zoomableImages = document.querySelectorAll(".zoomable");
    
    for (var i = 0; i < zoomableImages.length; i++) {
      zoomableImages[i].addEventListener("click", function() {
        this.classList.toggle("zoomed");
      });
    }
  });
 

/* SEGUNDO SLIDE CAJA NAVIDAD */
const slides2 = document.querySelectorAll('.slider2 img');
const anteriorBtn2 = document.getElementById('anterior2');
const siguienteBtn2 = document.getElementById('siguiente2');
let indice2 = 0;

function mostrarSlide2(index) {
    slides2.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function avanzarSlide2() {
    indice2++;
    if (indice2 === slides2.length) {
        indice2 = 0;
    }
    mostrarSlide2(indice2);
}

function retrocederSlide2() {
    indice2--;
    if (indice2 < 0) {
        indice2 = slides2.length - 1;
    }
    mostrarSlide2(indice2);
}

mostrarSlide2(indice2);
siguienteBtn2.addEventListener('click', avanzarSlide2);
anteriorBtn2.addEventListener('click', retrocederSlide2);

