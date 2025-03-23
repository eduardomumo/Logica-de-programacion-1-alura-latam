//variables
let numeroSecreto = 6;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez'

//bucle while
while (numeroUsuario != numeroSecreto) { //Mientras sea diferente el numero de usuario al numero secreto has lo siguiente (true)

    numeroUsuario = prompt("Me indicas un numero entre 1 y 10 por favor:"); //inicia prompt preguntando
    
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion (true)
        alert(`Acertaste el numero es ${numeroUsuario}, lo hiciste en ${intentos} ${palabraVeces}`); 
    }   else if (numeroUsuario > numeroSecreto){
        //La condicion no se cumplio (false)
        alert('El numero secreto es menor');
    } else {
        alert('El numero secreto es mayor')
    }
    // Contador de intentos
    intentos = intentos + 1;
    // Cuando no aciertas la variable palabraVeces cambia su valor
    palabraVeces = 'veces'
}


