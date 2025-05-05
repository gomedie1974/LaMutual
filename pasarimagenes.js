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
 

/* SEGUNDO SLIDE TROMEN */
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

 

/* TERCER SLIDE SAMSONITE */
const slides3 = document.querySelectorAll('.slider3 img');
const anteriorBtn3 = document.getElementById('anterior3');
const siguienteBtn3 = document.getElementById('siguiente3');
let indice3 = 0;

function mostrarSlide3(index) {
    slides3.forEach((slide, i) => {
        if (i === index) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

function avanzarSlide3() {
    indice3++;
    if (indice3 === slides3.length) {
        indice3 = 0;
    }
    mostrarSlide3(indice3);
}

function retrocederSlide3() {
    indice3--;
    if (indice3 < 0) {
        indice3 = slides3.length - 1;
    }
    mostrarSlide3(indice3);
}

mostrarSlide3(indice3);
siguienteBtn3.addEventListener('click', avanzarSlide3);
anteriorBtn3.addEventListener('click', retrocederSlide3);

 