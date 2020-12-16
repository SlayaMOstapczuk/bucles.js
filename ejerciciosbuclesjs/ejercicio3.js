/*3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() https://www.w3schools.com/jsref/met_win_confirm.asp*/

//i++ es igual a i = (i+1)  

//ejercicio 3

let texto = "";
let alerta;
let n = 2; //variable para cortar el ciclo  (bandera)
for (let i = 1; i < n; i++) {
    let confirmar = confirm("concatenar cadena de texto")
    if (confirmar == true) {
        alerta = prompt("Ingrese cadena de texto: ");
        texto = texto + alerta + (" - ")
        n++
    } else {
        document.write(texto)

    }
}