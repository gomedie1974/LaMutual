//info productos
const boton1 = document.getElementById("infoFernetB");
const boton2 = document.getElementById("infoCampari");
const boton3 = document.getElementById("infoAperol");
const boton4 = document.getElementById("infoCynar");
const boton5 = document.getElementById("infoBaileys");
const boton6 = document.getElementById("infoMonkey");
boton1.addEventListener("click", infoFernetB);
boton2.addEventListener("click", infoCampari);
boton3.addEventListener("click", infoAperol);
boton4.addEventListener("click", infoCynar);
boton5.addEventListener("click", infoBaileys);
boton6.addEventListener("click", infoMonkey);

function infoFernetB() {
    Swal.fire({
        imageUrl: '../image/branca.jpg',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
        title: `<strong><u>Fernet Branca</u></strong>`,  
        text: 'Hierbas, frutos, raíces y cortezas de distintas partes del mundo, se combinan dando vida a Fernet Branca. Dispuestas adecuadamente, esperan el instante justo de ser molidas. Se trituran en los molinos, cuidando de no alterar las propiedades de las hierbas esenciales para  una bebida que sólo es igual a sí misma.'
      })   
}

function infoCampari() {
    Swal.fire({
      imageUrl: '../image/camparifotosweet.jpg',
        imageWidth: 400,
        imageHeight: 350,
        imageAlt: 'Custom image',
        title: `<strong><u>Campari</u></strong>`,  
        text: 'Campari ha sido siempre símbolo de intriga y placer en el mundo de los aperitivos. Su intenso aroma y su sabor inspirador lo convierten una experiencia única y cautivadora. Éstos son los valores que han hecho de Campari una marca famosa en el mundo como ícono de estilo y excelencia italianos..'
      })   
}

function infoAperol() {
  Swal.fire({
    imageUrl: '../image/aperolsweet.jpg',
      imageWidth: 400,
      imageHeight: 250,
      imageAlt: 'Custom image',
      title: `<strong><u>Aperol</u></strong>`,  
      text: 'Campari ha sido siempre símbolo de intriga y placer en el mundo de los aperitivos. Su intenso aroma y su sabor inspirador lo convierten una experiencia única y cautivadora. Éstos son los valores que han hecho de Campari una marca famosa en el mundo como ícono de estilo y excelencia italianos..'
    })   
}

function infoCynar() {
  Swal.fire({
    imageUrl: '../image/cynarsweet.jpg',
      imageWidth: 400,
      imageHeight: 250,
      imageAlt: 'Custom image',
      title: `<strong><u>Cynar</u></strong>`,  
      text: 'El Cynar es un aperitivo italiano creado en 1952 por la empresa italiana Pezziol y elaborado con alcachofas y 13 hierbas distintas. Su nombre hace referencia a Cynara scolymus, la alcachofa. Su color es marrón con reflejos rojizos, tiene un aroma intenso y su sabor es amargo, aunque con un final dulzón.'
    })   
}

function infoBaileys() {
  Swal.fire({
    imageUrl: '../image/baileyssweet.jpg',
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: 'Custom image',
      title: `<strong><u>Baileys</u></strong>`,  
      text: 'Licor de Crema, hecho de una mezcla de crema de leche fresca, whisky irlandés, vainilla, cacao puro y azúcar. Su graduación alcohólica es de 17%. Notas: Cremosidad y notas de vainilla y de cacao.'
    })   
}

function infoMonkey() {
  Swal.fire({
      /* imageUrl: '../image/baileyssweet.jpg', */
      imageWidth: 300,
      imageHeight: 250,
      imageAlt: 'Custom image',
      title: `<strong><u>Monkey Shoulder</u></strong>`,  
      text: 'Licor de Crema, hecho de una mezcla de crema de leche fresca, whisky irlandés, vainilla, cacao puro y azúcar. Su graduación alcohólica es de 17%. Notas: Cremosidad y notas de vainilla y de cacao.'
    })   
}
