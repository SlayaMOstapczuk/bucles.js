let estacion = prompt("Ingrese su estación favorita: 1-Verano, 2-Otoño, 3-Invierno, 4-Primavera")

/*if (estacion == "1") {
    document.write("El usuario eligió Verano.")
} else if (estacion == "2") {
    document.write("El usuario eligió Otoño.")
} else if (estacion == "3") {
    document.write("El usuario eligió Invierno.")
} else(estacion == "4") {
    document.write("El usuario eligió Primavera.")
}*/

//Estructura Switch

switch (estacion) {
    case "1":
        document.write("El usuario seleccionó Verano<br>");
        break;
    case "2":
        document.write("El usuario seleccionó Otoño<br>");
        break;
    case "3":
        document.write("El usuario seleccionó Invierno<br>");
        break;
    case "4":
        document.write("El usuario seleccionó Primavera<br>");
        break;
    default:
        document.write("Ingresó una opción incorrecta.")
}