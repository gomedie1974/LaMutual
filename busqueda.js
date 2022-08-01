//Busqueda de productos
// Variables
const baseDeDatos = [];
class Producto {
    constructor (codigo, nombre, precio, marca, cantidad){
        this.id = this.id;
        this.nombre = nombre;
        this.precio = parseFloat(precio);
        this.marca = marca;
        this.cantidad = cantidad;
        this.disponible = true;
    }
}

baseDeDatos.push(new Producto("FB12", "FERNET", 990, "BRANCA", 94 ));
baseDeDatos.push(new Producto("FV32", "CYNAR", 490, "BLACK", 24 ));
baseDeDatos.push(new Producto("AP23", "APEROL", 690, "SPIRITZ", 27 ));
baseDeDatos.push(new Producto("CP12", "CAMPARI", 490, "ROJO", 39 ));
baseDeDatos.push(new Producto("F1881", "VODKA", 290, "ORANGE", 143 ));
baseDeDatos.push(new Producto("F1882", "FERNET", 290, "1882", 143 ));
baseDeDatos.push(new Producto("FBM,", "FERNET", 390, "FERNET", 15 ));


document.getElementById("botonBuscar").addEventListener("click", function(){
    let buscarDato = document.getElementById("inputDato").value.toUpperCase();
    const prod = baseDeDatos.find(function(producto){
        return producto.nombre === buscarDato;
    });
    if (prod){
        Swal.fire ({
            text:`El precio del  ${prod.nombre} ${prod.marca} es $ ${prod.precio} y la cantidad actual en stock es ${prod.cantidad} botellas`});
        
    }else{ 
        Swal.fire({
            imageUrl: "/image/noencontrado.png",
            title: 'Producto no encontrado',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
          })   

    } 
})
