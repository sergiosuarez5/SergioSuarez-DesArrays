// SergioSuarez

// Sistema de Autos , te va a preguntar que quieres hacer, si ver el listado de Autos o si queres agregar un auto. En caso de querer ver el listado de autos y no tener autos registrados te lo va a informar.Y si quieres agregar un auto te pregunta cuantos Autos quieres agregar y en base a eso vas a agregar los vehiculos detallando nombre del mismo: modelo , sistema de caja ,color y precio. 

alert("¡Bienvenido al Sistema de Autos!")
let opcion;

const autosInfo = []

let cantidad;


class Autos{
    constructor(marca, modelo, caja, color, precio){
        this.marca = marca.toUpperCase(),
        this.modelo = modelo.toUpperCase(),
        this.caja = caja.toUpperCase(),
        this.color = color.toUpperCase(),
        this.precio = precio
    }

}

function agregaAutos(){
    for(let i = 0; i<cantidad;i++){
        marca = prompt("Dame la Marca del auto numero " + i);
        modelo = prompt("Dame el Modelo del auto numero " + i);
        caja = prompt("Dame el Color del auto numero " + i);
        color = prompt("Dame la Caja del auto numero " + i);
        do{
            precio = parseInt(prompt("Dame el Precio del auto numero " + i));
        }while(isNaN(precio))
        autosInfo.push(new Autos(marca, modelo, caja, color, precio))
    }
}

do{
    opcion = parseInt(prompt("¿Que te gustaría hacer? \n 1. Agregar un auto \n 2. Ver listado de autos registrados \n 3. Salir."))
    while(opcion == 2 && autosInfo.length == 0){
        alert("Primero debes registrar un auto.")
        opcion = parseInt(prompt("¿Que te gustaría hacer? \n 1. Agregar un auto. \n 2. Ver listado de autos registrados. \n 3. Salir."))

    }


    switch(opcion){
        case 1:
            cantidad = parseInt(prompt("¿Cuantos autos agregaras?"))
            agregaAutos()
            alert("¡Has agregado " + cantidad + " auto/s!")
            break;
        case 2:
            for(let i = 0; i <= autosInfo.length; i++){
            
                console.log(autosInfo[i])
            } 
            
            break;
        case 3:
            break;
        default:
            alert("Opcion invalida. Intenta nuevamente...")
            break;
    }
    
}while(isNaN(opcion) || opcion != 3)
