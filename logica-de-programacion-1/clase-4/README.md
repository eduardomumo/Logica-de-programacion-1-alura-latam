<h1 align="center">Clase 4 Buenas practicas en programacion</h1>

<br>
<br>

## Break

Agregamos un número máximo de intentos para adivinar el número secreto. 

Si el usuario no adivina en tres intentos, se muestra un mensaje indicando que alcanzó el límite y se utiliza la palabra clave `break` para salir del `bucle while`. `Break` funciona como una **"ruptura forzada"** que permite escapar del bucle antes de que se cumpla la condición original, evitando que el usuario quede atrapado indefinidamente.

<br>
<br>

## Operador Ternario

**Variables en lugar de valores literales:** 

Se enfatiza la importancia de usar variables en lugar de valores literales en las condiciones para facilitar el mantenimiento y la escalabilidad del código.

Por ejemplo, en lugar de tener un límite fijo de intentos (ej. 3) directamente en el código, se utiliza una variable llamada `maximosIntentos` para almacenar este valor y en futuro cambiarlo de manera mas sencilla.

<br>

**Contadores abreviados:** 

Se presenta una forma abreviada de incrementar contadores, pasando de intentos += 1 a intentos++, lo cual es una práctica común en la programación moderna.

<br>

**Operador ternario:** 
Se introduce el operador ternario como una forma simplificada de escribir condiciones. En el ejemplo, se utiliza para determinar si la palabra "vez" debe estar en singular o plural dependiendo del número de intentos.

<br>

**Template strings:** 
Se muestra cómo combinar código JavaScript dentro de template strings para hacer el código más conciso y legible.

<br>

**Optimización del código:**
Se destaca que el código siempre puede evolucionar y mejorar, y que es importante buscar soluciones más eficientes y optimizadas.

<br>
<br>

## Math.random()

**Introducción a la Aleatoriedad:**

Se explica la necesidad de generar números aleatorios para añadir dinamismo a los juegos.

JavaScript utiliza un método pseudoaleatorio basado en el tiempo transcurrido desde una fecha específica.

<br>

**Documentación de Math.random():**

Se enfatiza la importancia de consultar la documentación oficial de MDN para entender cómo funciona `Math.random().`

`Math.random()` genera un número decimal entre 0 (inclusive) y 1 (exclusivo).

<br>

**Experimentación en la Consola:**

Se muestra cómo abrir la consola del navegador (F12 o a través del menú de herramientas).

Se anima a probar la funcionalidad de `Math.random()` de forma aislada en la consola para comprender su comportamiento.

<br>

**Ajuste del Rango de Números Aleatorios:**

Se explica cómo ajustar el número aleatorio generado para que se adapte al rango deseado (en este caso, de 1 a 10).

Se utiliza la multiplicación para escalar el número aleatorio al rango deseado.

<br>

**Uso de Math.floor():**

Se introduce `Math.floor()` para eliminar los decimales y obtener un número entero.

Se explica que `Math.floor()` redondea hacia abajo al entero más cercano.

<br>

**Ajuste Final para el Juego:**

Se identifica el problema de que `Math.floor(Math.random() * 10)` puede generar el número 0, que no es válido para el juego.

Se soluciona sumando 1 al resultado final para asegurar que el rango sea de 1 a 10.

`Math.floor(Math.random() * 10) + 1;`


<br>
<br>

## Math.random() en nuestro codigo

Implementamos el `Math.floor(Math.random() * 10) + 1;` en nuestro codigo

Usan `parseInt` para convertir la entrada del usuario de string a número, y discuten la importancia de comparar valores y tipos de datos con `===`.

`numeroDeUsuario = parseInt(prompt("Escribe un número entre 1 y 10: "));`

`let numero = 5;`
`let texto = "5";`

`console.log(numero == texto);   // true (porque '==' convierte el string "5" a número 5)`

`console.log(numero === texto);  // false (porque '===' compara valor y tipo, y número no es igual a string)`

<br>
<br>

## Ejercicio Clase 4

1. Crea un programa que utilice console.log para mostrar un mensaje de bienvenida.

2. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza console.log para mostrar el mensaje "¡Hola, [tu nombre]!" en la consola del navegador.

3. Crea una variable llamada "nombre" y asígnale tu nombre. Luego, utiliza alert para mostrar el mensaje "¡Hola, [tu nombre]!".

4. Utiliza prompt y haz la siguiente pregunta: ¿Cuál es el lenguaje de programación que más te gusta?. Luego, almacena la respuesta en una variable y muestra la respuesta en la consola del navegador.

5. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la suma de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La suma de [valor1] y [valor2] es igual a [resultado]." en la consola.

6. Crea una variable llamada "valor1" y otra llamada "valor2", asignándoles valores numéricos de tu elección. Luego, realiza la resta de estos dos valores y almacena el resultado en una tercera variable llamada "resultado". Utiliza console.log para mostrar el mensaje "La diferencia entre [valor1] y [valor2] es igual a [resultado]." en la consola.

7. Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

8. Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

9. Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

10. Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

11. Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

12. Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

13. Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.


