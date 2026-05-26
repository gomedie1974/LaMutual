// Función genérica para mostrar el modal
function mostrarModal(titulo, contenido) {
  Swal.fire({
    title: `<span style="font-size: 25px;"><u>${titulo}</u></span>`,
    html: `<div style="text-align: justify;"> <span style="font-size: 15px;">${contenido}</span></div>`
  });
}

// Eventos para los botones
document.getElementById("LujanDeCuyo").addEventListener("click", () => mostrarModal("Nota de Cata", "Nacido de viñedos situados en diferentes orígenes de Luján de Cuyo en un rango de entre 900 m y 1.100 m de altura sobre el nivel del mar, este Malbec aún a toda la complejidad del mosaico de suelos y climas presentes en este departamento histórico, logrando un vino de perfil elegante con una marcada expresión oral y taninos aterciopelados."));
document.getElementById("ValleDeUco").addEventListener("click", () => mostrarModal("Nota de Cata", "Nacido de viñedos situados en diferentes orígenes del Valle de Uco en un rango de entre 950 m y 1.500 m de altura sobre el nivel del mar, este Malbec aún a toda la complejidad del mosaico de suelos y climas presentes en este valle, logrando un vino con expresión típica de montaña resaltada por su frescura, mineralidad y marcada estructura."));
document.getElementById("MendozaQuimerino").addEventListener("click", () => mostrarModal("Vinificación", "Pinot Noir y Malbec fermentados en tanques de concreto, mientras que el Sauvignon Blanc y el Syrah lo fueron en tanques de acero inoxidable. Ninguno de los vinos tuvo paso por madera. El corte final se ensambla previo al embotellado, para así garantizar gran expresión frutal, en un corte que consideramos ideal."));
document.getElementById("MendozaCF").addEventListener("click", () => mostrarModal("Nota de Cata", "Cabernet Franc ha encontrado un hogar propio en Argentina.La gran exposición solar combinada con la fresca brisa de la montaña, permite que esta variedad de uva madure armoniosamente brindando una paleta completa de aromas y sabores: desde la fruta negra hasta la frescura de la hoja de tomate y el romero. Algunas personas han descrito este Cabernet Franc como aromático y expresivo."));
document.getElementById("CajaNinaGold").addEventListener("click", () => mostrarModal("Caja Combinada Nina Gold", "3 botellas de Nina Gold Malbec + 3 botellas de Nina Gold Cabernet Franc."));
document.getElementById("CajaCombinadaGranNina").addEventListener("click", () => mostrarModal("Caja Combinada Gran Nina", "2 botellas de Gran Nina Malbec + 2 botellas de Gran Nina Petit Verdot + 2 botellas de Gran Nina Cabernet Franc."));
 