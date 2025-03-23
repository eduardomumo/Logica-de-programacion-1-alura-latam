// 1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.
let contador = 1;

while (contador <= 10) {
    console.log(contador);
    contador = contador + 1;
};

// 2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.
let contador2 = 10;

while (contador2 >= 0) {
    console.log(contador2);
    contador2 = contador2 - 1;
};

// 3. Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let cuentaRegresiva = prompt('escribe un numero')

while (cuentaRegresiva >= 0){
    console.log(cuentaRegresiva)
    cuentaRegresiva = cuentaRegresiva - 1
}
    

// 4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.
let cuentaProgresiva = parseInt(prompt('Escribe un numero')); //si no pongo parseInt la consola del navegador imprime infinito
let numeroInicial = 0 

while (numeroInicial <= cuentaProgresiva){
    console.log(numeroInicial)
    numeroInicial = numeroInicial + 1
}



