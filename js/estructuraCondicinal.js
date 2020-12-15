let numero1 = parseInt(prompt("Ingrese el primer número"));
let numero2 = parseInt(prompt("Ingrese el segundo número"));

document.write("Número 1: " + numero1);
document.write("<br>Número 2: " + numero2);
document.write("<br>Resultado: " + (numero1 + numero2));
/*Estructura if
si (se cumple una condiciona logica) {aqui va el codigo si se cumple la condicion{
    
    else {
        si no se cumple la condicion, aqui va el codigo en ese caso
    } */

if (numero1 > numero2) {
    document.write("<br>El número 1 es mayor");
} else if (numero1 == numero2) {
    document.write("<br>Los números son iguales.");
} else {
    document.write("<br>El número 2 es mayor");
}