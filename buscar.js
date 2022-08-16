//Busqueda de productos
// Variables

const baseDeDatos = [
    {
        nombre: "FERNET",
        marca: "BRANCA",
        cantidad: 12,
    },
    {
        nombre: "FERNET",
        marca: "VITONE",
        cantidad: 0,
    },
    {
        nombre: "CAMPARI",
        marca: "ROJO",
        cantidad: 12,
    },
];

document.getElementById("botonBuscar").addEventListener("click", function(){
    let buscarDato = document.getElementById("inputDato").value.toUpperCase();
    const prod = baseDeDatos.filter(producto => {
        if (producto.nombre === buscarDato /* && producto.cantidad > 0 */){
            /* Swal.fire ({
                text:`El precio del  ${producto.nombre} y la marca es ${producto.marca} `});
             */
                alert (`Producto : ${producto.nombre} y Marca : ${producto.marca}`);
             window.location="http://127.0.0.1:5501/"   
        } else{ 
            Swal.fire({
                imageUrl: "/image/noencontrado.png",
                title: 'Producto no encontrado',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
                })   
            } 
    })
}); 
