function saludar() {
    alert("Bienvenid@ a Sakura Store!")
}

function consultarPorCompra() {
    respuesta = confirm("Desea realizar una compra?")

    if (respuesta) {
        alert("Continuaremos con el proceso de compra en la consola.")
        console.log("Inicializa la funcion procesarCompra()")
    } else {
        alert("Muy bien, te esperamos para la proxima!")
    }
}

saludar()
consultarPorCompra()

function procesarCompra() {
    do {
        codigo = prompt("Ingresa el codigo del producto que deseas.")
        respuestaCompra = confirm("Desea agregar otro producto al carrito?")
        sumarCarrito(codigo)
        if (respuestaCompra) {
        } else {
            console.log("EL total de tu compra es: $" + calcularTotal(precio1, precio2, precio3))
            console.log("Gracias por tu compra!")
        }

    } while (respuestaCompra)
}

let precio1 = 0
let precio2 = 0
let precio3 = 0

function sumarCarrito() {
    switch (codigo) {
        case "f0234":
            precio1 = 2990
            console.log("El valor del producto es de : $2990")
            break
        case "f5836":
            precio2 = 2750
            console.log("El valor del producto es de : $2750")
            break
        case "m1991":
            precio3 = 2000
            console.log("El valor del producto es de : $2000")
            break
        default:
            console.error("Articulo inexistente.")
            break
    }    
}

function calcularTotal(precio1, precio2, precio3) {
    return precio1 + precio2 + precio3
}