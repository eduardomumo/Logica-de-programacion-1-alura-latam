//variables
let numeroSecreto = 6;
let numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:");

console.log(numeroUsuario);

/* esto es un comentario 
multilinea
*/

if (numeroUsuario == numeroSecreto) {
    //Acertamos, fue verdadera la condicion (true)
    alert(`Acertaste el numero es ${numeroUsuario}`); 
} else {
    //La condicion no se cumplio (false)
    alert('Lo siento, no acertaste el número'); 
}
