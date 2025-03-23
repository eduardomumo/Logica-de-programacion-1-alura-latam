<h1 align="center"> Clase 3 Loops y tentativas</h1>

<br>
<br>

## Tips mayor o menor

Añadimos al codigo **"condicionales anidados" (una condición dentro de otra)** 

`else if`

para indicarle al usuario si el `numeroDeUsuario` es mayor, que salga un `alert` indicando: el numero es menor y si el `numeroDeUsuario` es mayor que salga un `alert` indicando: el numero es mayor

<br>
<br>

## Loops y bucles

**Bucles (Loops):** 

Se introdujo el concepto de bucles, que permiten repetir un bloque de código varias veces. En este caso, se utilizó un bucle "while" para que el juego siga pidiendo números hasta que la persona usuaria acierte.

<br>

**Condición del "while":**

La condicion tiene que ser `true` para que el codigo se ejecute

La condición dentro del "while" determina cuándo se detiene el bucle. En este caso, el bucle continúa mientras el número ingresado por la persona usuaria sea diferente al número secreto.

<br>

**Operador de Diferencia (!=):**

Se explicó que el operador "!=" significa "diferente de". Se utiliza para comparar si el número de la persona usuaria es diferente al número secreto.

<br>

**Declaración de Variables:** 

Es importante declarar las variables antes de usarlas dentro del bucle. En el ejemplo, la variable para el número de la persona usuaria se declara fuera del bucle para evitar errores.

<br>

**Indentación:** 

Se destacó la importancia de la indentación (espacios) en el código para que sea más fácil de leer y entender la estructura del programa.

<br>

**Analogía de la Caja:** 

Se utilizó una analogía de una caja para explicar el `"while"`. La persona usuaria está atrapada en la caja `(el bucle)` hasta que adivina el número correcto.

<br>

**Si la condición es true:** Sigues dentro de la caja, repitiendo lo que tengas que hacer (en el juego, seguir intentando adivinar el número).

<br>

**Si la condición es false:** La puerta de la caja se abre y sales del bucle.

<br>
<br>

## Contador de intentos

**Contador de Intentos:**

Se introduce el concepto de contador para registrar cuántas veces el usuario intenta adivinar el número secreto.

Se crea una variable llamada `intentos` para guardar esta información.

La variable `intentos` se inicializa en `1`, asumiendo que al menos habrá un intento.

Si el número ingresado no es correcto, se incrementa el contador `+ 1`.

<br>

**Implementación del Contador:**

Se muestra cómo incrementar el contador en JavaScript `(intentos = intentos + 1)`.

Se explica dónde colocar el incremento del contador: **dentro del bloque `else` (cuando el número no es correcto).**

Se menciona que también se podría inicializar el contador en 0 y colocar el incremento fuera de las condiciones, pero se prefiere la primera opción por claridad.

<br>

**Mostrar el Resultado:**

Se modifica el mensaje que se muestra cuando el usuario acierta para incluir el número de `intentos`.

Se utiliza la `interpolación (template strings)` para mezclar texto y variables en el mensaje.

<br>

**Mejora Lingüística:**

Se identifica un problema en el mensaje cuando el usuario acierta en un solo intento ("Realizaste la acción en una veces").

Se introduce una variable llamada `palabraVeces` para almacenar la palabra correcta `("vez" o "veces")` según el número de intentos.

Se actualiza la lógica para que, si es solo un `intento`, se muestre `"vez"` en lugar de `"veces"`.

**dentro del bloque `else` (cuando el número no es correcto).** cambiamos el valor de la variable `palabraVeces`

<br>
<br>

## Ejercicio Clase 2

1. Crea un contador que comience en 1 y vaya hasta 10 usando un bucle 'while'. Muestra cada número.

2. Crea un contador que comience en 10 y vaya hasta 0 usando un bucle 'while'. Muestra cada número.

3. Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.

4. Crea un programa de cuenta progresiva. Pide un número y cuenta desde 0 hasta ese número utilizando un bucle 'while' en la consola del navegador.


