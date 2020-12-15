/*Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un numero que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el numero ingresado no es válido mostrar el mensaje “Introduce un número válido”.*/
//Ejercicio 2

let s = 1;

for (let i = 1; i <= s; i++) {
    let calificación = parseInt(prompt("Ponga su calificación -de 0 a 10-: "));

    if (calificación >= 0 && calificación <= 10) {
        if (calificación <= 2) {
            document.write("<br>Muy deficiente");
        } else if (calificación <= 4) {
            document.write("<br>Insuficiente");
        } else if (calificación <= 6) {
            document.write("<br>Sufciente");
        } else if (calificación == 7) {
            document.write("<br>Bien");
        } else if (calificación <= 9) {
            document.write("<br>Notable");
        } else {
            document.write("<br>Sobresaliente");
        }
    } else {
        alert("Número erróneo.Introduce un número válido")
        s++
    }
}