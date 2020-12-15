//bucle while

/*while(condicion logica){
    todo el codigo que quiero ejecutar varias veces
    cambiar condicion logica
}*/

/*let contador = 1;

while (contador <= 50) {
    document.write("<br>Elemento " + contador);
    contador++; //contador = contador + 1;
}

let cont = 1
do {
    document.write("<br>Item N" + cont);
    cont++; //cont=+1;
} while (con <= 20)

//for(let indice = 0; condicion logica; incrementar o disminuir variable ){...}*/

/*for (let i = 1; i <= 10; i++) {
    document.write("<br>cosa " + i);
}*/

let edad

for (let i = 1; i <= 1; i++) {
    edad = parseInt(prompt("Ingrese su edad "))
    if (edad < 18) {
        document.write("<br>Usted no está habilitado para conducir.");
    } else {
        document.write("<br>Usted está habilitado para conducir")
    }
};