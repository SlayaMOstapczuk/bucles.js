/*2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario seleccione cancelar o ingrese el valor “0” se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo. (linea 27)
Mostrar en el documento web los ítems de las posiciones primera, tercera y última. (linea 28)
Añade en última posición la ciudad de París. (linea 19)
Escribe por pantalla el elemento que ocupa la segunda posición. (linea 29)
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.(linea 20)*/

let ciudades = [];
let confirmar = false;
for (let i = 0; confirmar == false; i++) {
    ciudades[i] = prompt("Ingrese el nombre de una ciudad: ");
    if (ciudades[i] == 0) {
        break;
    } else if (ciudades[i] == null) {
        break;
    }
}
ciudades.splice((ciudades.length - 1), 0, "París");
ciudades.splice(1, 1, "Barcelona");
confirm("Nombre de ciudades: ");
for (let i = 0; i < ciudades.length; i++) {
    if ((i + 1) < ciudades.length) {
        document.write(ciudades[i] + " - ");
    }
}
document.write("<br>" + "La longitud del arreglo es: " + (ciudades.length - 1));
document.write("<br>" + ciudades[0] + " - " + ciudades[2] + " - " + ciudades[(ciudades.length - 2)]);
document.write("<br>" + ciudades[1]);