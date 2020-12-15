/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.*/
//ejercicio1
let edad

for (let i = 1; i <= 1; i++) {
    edad = parseInt(prompt("Ingrese su edad "))
    if (edad < 18) {
        document.write("<br>Usted no está habilitado para conducir.");
    } else {
        document.write("<br>Usted está habilitado para conducir")
    }
};