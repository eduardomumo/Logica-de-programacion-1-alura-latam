//variables
let numeroSecreto = Math.floor(Math.random() * 10) + 1; //numero aleatorio entre 1 y 10;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez' lo cambie por el operador ternario
let maximoIntentos = 3;

//bucle while
while (numeroUsuario != numeroSecreto) { //Mientras sea diferente el numero de usuario al numero secreto has lo siguiente (true)
    console.log(numeroSecreto); //muestra el numero secreto en consola
    numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 10 por favor:")); //inicia prompt preguntando un numero 
    
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condicion (true)
        alert(`Acertaste el numero es ${numeroUsuario}, lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces'}`); 
    }   else if (numeroUsuario > numeroSecreto){
        //La condicion no se cumplio (false)
        alert('El numero secreto es menor');
    } else {
        alert('El numero secreto es mayor')
    }
    // Contador de intentos
    //intentos = intentos + 1; ejemplos de contadores
    //intentos += 1; ejemplos de contadores
    intentos++;
    // Cuando no aciertas la variable palabraVeces cambia su valor
    //palabraVeces = 'veces' lo cambie por el operador ternario
    if (intentos > maximoIntentos) {
        // cuando llegas al numero maximo de intentos se detiene el bucle con break
        alert(`Llegaste al numero maximo de ${maximoIntentos} intentos`);
        break;
    }
}


