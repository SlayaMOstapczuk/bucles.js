/*1- Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista  los doce nombres del arreglo.*/

let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"]

document.write("<h4>Lista de meses del año: </h4>")
for (let i = 0; i < meses.length; i++) {
    document.write(meses[i] + " - <br>")

}