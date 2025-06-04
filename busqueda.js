function initBusqueda() {
  const btnBuscar = document.getElementById("btnBuscar");
  const btnCerrar = document.getElementById("btnCerrar");
  const inputBusqueda = document.getElementById("busquedaInput");
  const resultadosDiv = document.getElementById("resultados");

  const paginas = [
    "aperitivos.html", "almacen.html", "tienda.html", "canjes.html", "hogar.html",
    "feria.html", "juegos.html", "puravida.html", "lidherma.html", "perfumes.html",
    "nega.html", "accesorios.html", "calzado.html", "camping.html", "swissbrand.html",
    "deportfem.html", "deportmasc.html", "kankay.html"
  ];

  btnBuscar.addEventListener("click", function () {
    const consulta = inputBusqueda.value.toLowerCase();
    const fetches = paginas.map(p => fetch("pages/" + p));

    Promise.all(fetches)
      .then(responses => Promise.all(responses.map(res => res.text())))
      .then(htmlArray => {
        const temporalDiv = document.createElement("div");
        temporalDiv.innerHTML = htmlArray.join("");

        const productos = temporalDiv.querySelectorAll(".card");
        const resultados = Array.from(productos).filter(card =>
          card.querySelector("h5")?.innerText.toLowerCase().includes(consulta)
        );

        resultadosDiv.innerHTML = resultados.length
          ? resultados.map(p => `<div class="resultado">${p.outerHTML}</div>`).join("")
          : "<p>No se encontraron resultados.</p>";

        btnCerrar.style.display = resultados.length ? "block" : "none";
      });
  });

  btnCerrar?.addEventListener("click", () => {
    resultadosDiv.innerHTML = "";
    btnCerrar.style.display = "none";
  });
}
