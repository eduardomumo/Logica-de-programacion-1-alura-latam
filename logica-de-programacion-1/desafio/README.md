<h1 align="center">Desafio</h1>

<br>
<br>

En el desafío, se te pide que modifiques el juego para que el rango de números aleatorios no esté limitado a 1 y 10. La idea es que puedas jugar con un rango mayor, como entre 1 y 100 o incluso entre 1 y 1000, según lo que el usuario desee.

Para lograr esto, debes identificar qué partes del código necesitan ser ajustadas para permitir esta flexibilidad en el rango de números.

## Respuesta

Tienes que cambiar la variable `let numeroSecreto = Math.floor(Math.random() * 100) + 1; //numero aleatorio entre 1 y 100;`

y

`numeroUsuario = parseInt(prompt("Me indicas un numero entre 1 y 100 por favor:")); //inicia prompt preguntando un numero`


