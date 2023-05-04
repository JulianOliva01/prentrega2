

class Productos {
    nombreClientes;
    hamburguesaApellido;
    precioEdad;

    constructor(nombreClientes, hamburguesaApellido, precioEdad) {
        this.nombreClientes = nombreClientes;
        this.hamburguesaApellido = hamburguesaApellido;
        this.precioEdad = precioEdad;

        this.comprar = function (nombreClientes) {
            console.log(' Usted ' + nombreClientes + ' acaba de comprar la hamburguesa: ' + this.hamburguesaApellido + ' al precio de ' + this.precioEdad)
        }
    }
}
const cliente1 = new Productos('Jorge', 'Cuello', 50)
const cliente2 = new Productos('Miguel', 'Esperanza', 26)
const cliente3 = new Productos('Camila', 'Root', 20)

const hamburguesa1 = new Productos('Mac Donalds', 'Big Mac', 1800)
const hamburguesa2 = new Productos('Mac Donalds', 'Cajita Feliz', 1600)
const hamburguesa3 = new Productos('Mac Donalds', 'Mac Pollo', 1500)
const hamburguesa4 = new Productos('Mac Donalds', 'Mac DeLuxe', 2000)

hamburguesa1.comprar('Jorge')
hamburguesa3.comprar('Camila')
hamburguesa4.comprar('Miguel')


