// 1. Pregunta al usuario qué día de la semana es. Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!". De lo contrario, muestra "¡Buena semana!".
let diaDeSemana = prompt ("¿Que dia de la semana es?")

if (diaDeSemana == "sabado"){
    alert ("¡Buen fin de semana!")
} else if(diaDeSemana == "domingo"){
    alert ("¡Buen fin de semana!")
} else {
    alert ("¡Buena semana!")
}

// 2. Verifica si un número ingresado por el usuario es positivo o negativo. Muestra una alerta informativa.
let ingresaNumero = prompt ("Ingresa un numero");

if (ingresaNumero > 0){
    alert ("El numero es positivo")
} else{
    alert ("El numero es negativo")
}

// 3. Crea un sistema de puntuación para un juego. Si la puntuación es mayor o igual a 100, muestra "¡Felicidades, has ganado!". En caso contrario, muestra "Intentalo nuevamente para ganar.".
let puntuación = prompt ("Ingrese su puntacion");

if (puntuación >= 100){
    alert ("¡Felicidades, has ganado!")
} else{
    alert ("Intentalo nuevamente para ganar.")
}

// 4. Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.
let saldoCuenta = 200
alert (`El saldo de tu cuenta es ${saldoCuenta}`)

// 5. Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
let ingresaNombre = prompt("Ingrese su nombre")
alert (`Bienvenido ${ingresaNombre}`)



