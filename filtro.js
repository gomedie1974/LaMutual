document.addEventListener("DOMContentLoaded", function () {
    const filtroSelect = document.getElementById("filtro");
    const listaElementos = document.querySelectorAll(".col.mb-5");

    filtroSelect.addEventListener("change", function () {
        const categoriaSeleccionada = filtroSelect.value;

        // Mostrar todos los elementos
        if (categoriaSeleccionada === "todos") {
            for (const elemento of listaElementos) {
                elemento.style.display = "block";
            }
            return;
        }

        // Ocultar todos los elementos y mostrar solo los de la categoría seleccionada
        for (const elemento of listaElementos) {
            elemento.style.display = "none";
        }

        const elementosCategoria = document.querySelectorAll("." + categoriaSeleccionada);
        for (const elemento of elementosCategoria) {
            elemento.style.display = "block";
        }
    });
});