//info productos
const boton1 = document.getElementById("infoFernetB");
boton1.addEventListener("click", infoFernetB);
const boton2 = document.getElementById("infoCampari");
boton2.addEventListener("click", infoCampari);
const boton3 = document.getElementById("infoAperol");
boton3.addEventListener("click", infoAperol);
const boton4 = document.getElementById("infoCynar");
boton4.addEventListener("click", infoCynar);
const botonM = document.getElementById("infoMonkey");
botonM.addEventListener("click", infoMonkey);
const botonMerle = document.getElementById("infoMerle");
botonMerle.addEventListener("click", infoMerle);
const botonJD = document.getElementById("infoJd");
botonJD.addEventListener("click", infoJd);
const botonGB = document.getElementById("infoGb");
botonGB.addEventListener("click", infoGb);



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
      text: 'Aperol es una bebida alcohólica de origen italiano, entre sus ingredientes se encuentran la naranja amarga, el ruibarbo, la genciana y la quina. Aunque sabe y huele muy similar al Campari, Aperol tiene una graduación alcohólica de 11%, menos de la mitad que Campari. Sin embargo, es más suave y menos amargo, mientras que el Campari es más oscuro de color.'
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


function infoMonkey() {
  Swal.fire({
      title: `<strong><u>Monkey Shoulder</u></strong>`,  
      text: 'Este single malt es especial por su triple combinación de maltas, the Glenfiddich, the Balnvenie y the Kininvie, combinación que le da el acabado suave y redondo que le caracteriza. En nariz es suave y con aromas dulces. En boca, tiene toques de malta y vainilla, con ligeras notas de dulzor a mermelada y azúcar de la cebada.'
    })   
}
  
function infoMerle() {
  Swal.fire({
      title: `<strong><u>Gin MERLE</u></strong>`,  
      text: 'Gin Merle se elabora a partir de la combinación de 12 botánicos cuidadosamente seleccionados. Tiene un carácter de enebro redondo, notas cítricas que le dan frescura y un complejo floral. Se caracteriza por su rica textura, levemente aceitosa, fresca y picante de cilantro.'
    })   
}

function infoJd() {
  Swal.fire({
      title: `<strong><u>J. Walker Red Label</u></strong>`,  
      text: 'Tiene un sabor acentuado y lleno de carácter que se mantiene incluso al ser mezclado. Johnnie Walker Red Label es, ahora, el whisky escocés más vendido en todo el mundo. Se destaca por su carácter e intensidad, por sus notas especiadas que estallan con sabores vibrantes y ahumados. Es una mezcla que combina whiskies ligeros de la costa este escocesa y whiskies ahumados y oscuros de la costa oeste, creando una extraordinaria profundidad de sabor. Johnnie Walker Red Label explota en el paladar con la frescura de la espuma de una ola, seguida por un estallido de especias aromáticas -canela y pimienta- cuya efervescencia se asienta en el centro de la lengua. Al paladar, se siente una dulzura frutal, como manzanas frescas o pera y notas de vainilla para después dar lugar a un final persistente y ahumado.'
    })   
}

function infoGb() {
  Swal.fire({
      title: `<strong><u>Gin Bulldog</u></strong>`,  
      text: 'Su sabor es muy suave, apetecible y bien equilibrado. Cuenta con los botánicos clásicos como el limón, almendra, lavanda, enebro, cassia, angélica y regaliz, pero también con otros más exóticos como la amapola, las hojas de loto, el cilantro y el longan. Este último, también conocido como "ojo de dragón", es una fruta exótica translúcida que suele emplearse en la medicina tradicional china y es probablemente el responsable de su aroma floral.'
    })   
}

