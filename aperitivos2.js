const boton = document.getElementById("infoMonkey");
boton.addEventListener("click", infoMonkey);
const boton1 = document.getElementById("infoJw");
boton1.addEventListener("click", infoJw);
const boton2 = document.getElementById("infoJd");
boton2.addEventListener("click", infoJd);
const boton3 = document.getElementById("infoGb");
boton3.addEventListener("click", infoGb);
const boton4 = document.getElementById("infoGmg");
boton4.addEventListener("click", infoGmg);

function infoMonkey() {
    Swal.fire({
        title: `<strong><u>Monkey Shoulder</u></strong>`,  
        text: 'Este single malt es especial por su triple combinación de maltas, the Glenfiddich, the Balnvenie y the Kininvie, combinación que le da el acabado suave y redondo que le caracteriza. En nariz es suave y con aromas dulces. En boca, tiene toques de malta y vainilla, con ligeras notas de dulzor a mermelada y azúcar de la cebada.'
      })   
  }
  
function infoJw() {
    Swal.fire({
        title: `<strong><u>Johnnie Walker Black Label</u></strong>`,  
        text: 'Johnnie Walker Black Label es un verdadero ícono, reconocido como referente para todas las otras mezclas de lujo. Creado usando sólo whiskies con un mínimo de 12 años de añejamiento de los 4 rincones de Escocia, Johnnie Walker Black Label tiene un inconfundible carácter profundo, suave y complejo. Un whisky excepcional para compartir en cualquier ocasión, sea pasando un rato agradable en casa con sus amigos o en una salida inolvidable.'
      })   
  }

  function infoJd() {
    Swal.fire({
        title: `<strong><u>Jack Daniel's</u></strong>`,  
        text: 'Whiskey Jack Daniel’s es una reconocida marca de whiskey de origen estadounidense. Se trata de un whiskey Tennesse, y este tipo de destilado se diferencia en que su elaboración se filtra a través de carbon de madera de arce.'
      })   
  }
  
  function infoGb() {
    Swal.fire({
        title: `<strong><u>Gin Bulldog</u></strong>`,  
        text: 'Su sabor es muy suave, apetecible y bien equilibrado. Cuenta con los botánicos clásicos como el limón, almendra, lavanda, enebro, cassia, angélica y regaliz, pero también con otros más exóticos como la amapola, las hojas de loto, el cilantro y el longan. Este último, también conocido como "ojo de dragón", es una fruta exótica translúcida que suele emplearse en la medicina tradicional china y es probablemente el responsable de su aroma floral.'
      })   
  }

  function infoGmg() {
    Swal.fire({
        title: `<strong><u>Gin MG</u></strong>`,  
        text: 'MG es una ginebra de corte clásico, elaborada artesanalmente a partir de productos 100% naturales (sin artificios, sin aditivos y sin potenciadores), donde el enebro es el ingrediente predominante. Una ginebra de tradición y experiencia, con más de 75 años de historia. La etiqueta refleja todo aquello que Gin MG es y quiere transmitir: herencia, calidad y tradición.'
      })   
  }