<h1 align="center">Advent Js 2024</h1>
<h3 align="center">Resolution of problematic in AdventJs</h3>
<h3 align="center">This project was created resolving the problems in the site  <a href="https://adventjs.dev/es"> adventjs.dev </a>.</h3>
<h3 align="center">Thanks Midudev to create this problems  <a href="https://midu.dev/"> midu.dev </a>.</h3>

---
## List of problems
- [List of problems](#list-of-problems)
  - [Reto #1: 🎁 ¡Primer regalo repetido! ](#reto-1--primer-regalo-repetido-)
  - [ Reto #2: 🖼️ Enmarcando nombres ](#-reto-2-️-enmarcando-nombres-)
  - [ Reto #3: 🏗️ Organizando el inventario ](#-reto-3-️-organizando-el-inventario-)
  - [ Reto #4: 🎄 Decorando el árbol de Navidad ](#-reto-4--decorando-el-árbol-de-navidad-)
  - [ Reto #5: 👞 Emparejando botas ](#-reto-5--emparejando-botas-)
  - [ Reto #6: 📦 ¿Regalo dentro de la caja? ](#-reto-6--regalo-dentro-de-la-caja-)
  - [ Reto #7: 👹 El ataque del Grinch ](#-reto-7--el-ataque-del-grinch-)
  - [ Reto #8: 🦌 La carrera de renos ](#-reto-8--la-carrera-de-renos-)
  - [ Reto #11: 🏴‍☠️ Nombres de archivos codificados ](#-reto-11-️-nombres-de-archivos-codificados-)
  - [ Reto #14: 🦌 Acomodando los renos ](#-reto-14--acomodando-los-renos-)
  - [ Reto #15: ✏️ Dibujando tablas ](#-reto-15-️-dibujando-tablas-)
---
### <a name="reto-1--primer-regalo-repetido">Reto #1: 🎁 ¡Primer regalo repetido! </a>
<h3> Fácil 🟢 </h3>
Santa Claus 🎅 ha recibido una lista de números mágicos que representan regalos 🎁, pero algunos de ellos están duplicados y deben ser eliminados para evitar confusiones. Además, los regalos deben ser ordenados en orden ascendente antes de entregárselos a los elfos.

Tu tarea es escribir una función que reciba una lista de números enteros (que pueden incluir duplicados) y devuelva una nueva lista sin duplicados, ordenada en orden ascendente.

```javascript 
const gifts1 = [3, 1, 2, 3, 4, 2, 5]
const preparedGifts1 = prepareGifts(gifts1)
console.log(preparedGifts1) // [1, 2, 3, 4, 5]

const gifts2 = [6, 5, 5, 5, 5]
const preparedGifts2 = prepareGifts(gifts2)
console.log(preparedGifts2) // [5, 6]

const gifts3 = []
const preparedGifts3 = prepareGifts(gifts3)
console.log(preparedGifts3) // []
// No hay regalos, la lista queda vacía
```
<ul>
  <li><a href="/js/01-primer-regalo-prometido.js"> Resolution JS ⭐⭐⭐⭐⭐ </a></li>
  <li><a href="/ts/01-primer-regalo-prometido.ts"> Resolution TS ⭐⭐⭐ </a> </li>
  <li><a href="/python//01-primer-regalo-prometido.py"> Resolution Py ⭐⭐⭐⭐ </a> </li>
</ul>

---
### <a name="reto-2-️-enmarcando-nombres"> Reto #2: 🖼️ Enmarcando nombres </a>
<h3> Fácil 🟢 </h3>
Santa Claus 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

Reglas:

Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.
Cada nombre debe estar en una línea, alineado a la izquierda.
El marco está construido con * y tiene un borde de una línea de ancho.
La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.
Ejemplo de funcionamiento:

```javascript
createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])
```
<ul>
  <li>
    <a href="/js/02-enmarcando-nombres.js"> Resolution Js ⭐⭐⭐⭐⭐</a>
  </li>
  <li>
    <a href="/ts/02-enmarcando-nombres.ts"> Resolution Ts ⭐⭐⭐⭐</a>
  </li>

  <li>
    <a href="/python/02-enmarcando-nombres.py"> Resolution Py ⭐⭐⭐⭐</a>
  </li>
</ul>



---
### <a name="reto-3-️-organizando-inventario"> Reto #3: 🏗️ Organizando el inventario </a>
<h3> Fácil 🟢 </h3>


Santa Claus 🎅 está revisando el inventario de su taller para preparar la entrega de regalos. Los elfos han registrado los juguetes en un array de objetos, pero la información está un poco desordenada. Necesitas ayudar a Santa a organizar el inventario.

Recibirás un array de objetos, donde cada objeto representa un juguete y tiene las propiedades:

name: el nombre del juguete (string).
quantity: la cantidad disponible de ese juguete (entero).
category: la categoría a la que pertenece el juguete (string).
Escribe una función que procese este array y devuelva un objeto que organice los juguetes de la siguiente manera:

Las claves del objeto serán las categorías de juguetes.
Los valores serán objetos que tienen como claves los nombres de los juguetes y como valores las cantidades totales de cada juguete en esa categoría.
Si hay juguetes con el mismo nombre en la misma categoría, debes sumar sus cantidades.
Si el array está vacío, la función debe devolver un objeto vacío {}.

``` javascript
const inventary = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
]

organizeInventory(inventary)

// Resultado esperado:
// {
//   toys: {
//     doll: 5,
//     car: 5
//   },
//   sports: {
//     ball: 2,
//     racket: 4
//   }

const inventary2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]

organizeInventory(inventary2)

// Resultado esperado:
// {
//   education: {
//     book: 15
//   },
//   art: {
//     paint: 3
//   }
// }
```

<ul>
  <li> <a href="/js/03-organizando-juguetes.js"> Resolution Js⭐⭐⭐⭐⭐</a> </li>
  <li> <a href="/ts/03-organizando-juguetes.ts"> Resolution Ts⭐⭐⭐⭐</a> </li>
  <li> <a href="/python/03-organizando-juguetes.py"> Resolution Py⭐⭐⭐⭐</a> </li>
</ul>



---

### <a name="reto-4-️-decorando-el-arbol"> Reto #4: 🎄 Decorando el árbol de Navidad </a>

<h3> Medio 🟠 </h3>

¡Es hora de poner el árbol de Navidad en casa! 🎄 Pero este año queremos que sea especial. Vamos a crear una función que recibe la altura del árbol (un entero positivo entre 1 y 100) y un carácter especial para decorarlo.

La función debe devolver un string que represente el árbol de Navidad, construido de la siguiente manera:

El árbol está compuesto de triángulos de caracteres especiales.
Los espacios en blanco a los lados del árbol se representan con guiones bajos _.
Todos los árboles tienen un tronco de dos líneas, representado por el carácter #.
El árbol siempre debe tener la misma longitud por cada lado.
Debes asegurarte de que el árbol tenga la forma correcta usando saltos de línea \n para cada línea.


```javascript
const tree = createXmasTree(5, '*')
console.log(tree)
/*
____*____
___***___
__*****__
_*******_
*********
____#____
____#____
*/

const tree2 = createXmasTree(3, '+')
console.log(tree2)
/*
__+__
_+++_
+++++
__#__
__#__
*/

const tree3 = createXmasTree(6, '@')
console.log(tree3)
/*
_____@_____
____@@@____
___@@@@@___
__@@@@@@@__
_@@@@@@@@@_
@@@@@@@@@@@
_____#_____
_____#_____
*/

```
Asegúrate de utilizar saltos de línea \n al final de cada línea, excepto en la última.

<ul> 
  <li> <a href="/js/04-decorando-el-arbol-de-navidad.js"> Resolution Js ⭐⭐⭐⭐⭐</a> </li>
  <li> <a href="/ts/04-decorando-el-arbol-de-navidad.ts"> Resolution Ts ⭐⭐⭐⭐</a> </li>
  <li> <a href="/python/04-decorando-el-arbol-de-navidad.py"> Resolution Py ⭐⭐⭐</a> </li>
</ul>

---

### <a name="reto-5-️-emparejando-botas"> Reto #5: 👞 Emparejando botas </a>
<h3> Fácil 🟢 </h3>

Los elfos 🧝🧝‍♂️ de Santa Claus han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

- type indica si es una bota izquierda (I) o derecha (R).
- size indica el tamaño de la bota.
  
Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los tamaños disponibles después de emparejar las botas.

```javascript
const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes3)
// []
```
<ul>
  <li> <a href="/js/05-emparejando-botas.js"> Resolution Js ⭐⭐⭐⭐⭐ </a> </li>
  <li> <a href="/ts/05-emparejando-botas.ts"> Resolution Ts ⭐⭐ </a> </li>
  <li> <a href="/python/05-emparejando-botas.py"> Resolution Py ⭐⭐⭐ </a> </li>
</ul>

---

### <a name="reto-6-️-regalo-dentro-de-la-caja"> Reto #6: 📦 ¿Regalo dentro de la caja? </a>

<h3> Medio 🟠 </h3>

Ya hemos empaquetado cientos de regalos 🎁… pero a un elfo se le ha olvidado revisar si el regalo, representado por un asterisco *, está dentro de la caja.

La caja tiene un regalo (*) y cuenta como dentro de la caja si:

- Está rodeada por # en los bordes de la caja.
- El * no está en los bordes de la caja.
Ten en cuenta entonces que el * puede estar dentro, fuera o incluso no estar. Y debemos devolver true si el * está dentro de la caja y false en caso contrario.

Ejemplos:

```javascript
inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "*####",
  "#   #",
  "#  #*",
  "####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false
```

<ul>
  <li> <a href="/js/06-regalo-dentro-de-la-caja.js"> Resolution Js ⭐⭐⭐⭐⭐ </a> </li>
  <li> <a href="/ts/06-regalo-dentro-de-la-caja.ts"> Resolution Ts ⭐⭐⭐⭐⭐ </a> </li>
</ul>


---

### <a name="reto-7-️-ataque-del-grinch"> Reto #7: 👹 El ataque del Grinch </a>
<h3> Medio 🟠 </h3>

¡El grinch 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo Pheralb ha detectado el patrón que ha seguido el grinch para desordenarlos. Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:

Recibirás un string que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.
Nos ha dejado algunos ejemplos:

```javascript
fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"
```
<ul>
  <li> <a href="/js/07-el-ataque-del-grinch.js"> Resolution Js ⭐⭐⭐⭐ </a> </li>
</ul>

---

### <a name="reto-7-️-carrera-de-renos"> Reto #8: 🦌 La carrera de renos </a>
<h3> Fácil 🟢 </h3>

¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa! 🦌🎄
Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

Tu tarea es mostrar el progreso de cada reno en una pista de nieve en formato isométrico.

La información que recibes:

indices: Un array de enteros que representan el progreso de cada reno en la pista:
0: El carril está vacío.
Número positivo: La posición actual del reno desde el inicio de la pista.
Número negativo: La posición actual del reno desde el final de la pista.
length: La longitud de cada carril.
Devuelve un string que represente la pista de la carrera:

Cada carril tiene exactamente length posiciones llenas de nieve (~).
Cada reno se representa con la letra r.
Los carriles están numerados al final con /1, /2, etc.
La vista es isométrica, por lo que los carriles inferiores están desplazados hacia la derecha.

```javascript
drawRace([0, 5, -3], 10)
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

drawRace([2, -1, 0, 5], 8)
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

drawRace([3, 7, -2], 12)
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~r~~ /3
*/

```
<ul>
  <li> <a href="/js/08-carrera-de-renos.js"> Resolution Js ⭐⭐⭐ </a> </li>
</ul>

---

### <a name="reto-11-️-nombres-codificados"> Reto #11: 🏴‍☠️ Nombres de archivos codificados </a>

<h3> Fácil 🟢 </h3>

El Grinch ha hackeado 🏴‍☠️ los sistemas del taller de Santa Claus y ha codificado los nombres de todos los archivos importantes. Ahora los elfos no pueden encontrar los archivos originales y necesitan tu ayuda para descifrar los nombres.

Cada archivo sigue este formato:

Comienza con un número (puede contener cualquier cantidad de dígitos).
Luego tiene un guion bajo _.
Continúa con un nombre de archivo y su extensión.
Finaliza con una extensión extra al final (que no necesitamos).
Ten en cuenta que el nombre de los archivos pueden contener letras (a-z, A-Z), números (0-9), otros guiones bajos (_) y guiones (-).

Tu tarea es implementar una función que reciba un string con el nombre de un archivo codificado y devuelva solo la parte importante: el nombre del archivo y su extensión.

Ejemplos 
```javascript
decodeFilename('2023122512345678_sleighDesign.png.grinchwa')
// ➞ "sleighDesign.png"

decodeFilename('42_chimney_dimensions.pdf.hack2023')
// ➞ "chimney_dimensions.pdf"

decodeFilename('987654321_elf-roster.csv.tempfile')
// ➞ "elf-roster.csv"

```
<ul>
  <li> <a href="/js/11-nombres-de-archivos-codificados.js"> Resolution Js ⭐⭐⭐⭐⭐ </a> </li>
</ul>

---


### <a name="reto-14-️-acomodando-renos"> Reto #14: 🦌 Acomodando los renos </a>

<h3> Fácil 🟢 </h3>

Los renos necesitan moverse para ocupar los establos, pero no puede haber más de un reno por establo. Además, para que los renos estén cómodos, debemos minimizar la distancia total que recorren para acomodarse.

Tenemos dos parámetros:

reindeer: Un array de enteros que representan las posiciones de los renos.
stables: Un array de enteros que representan las posiciones de los establos.
Hay que mover cada reno, desde su posición actual, hasta un establo. Pero hay que tener en cuenta que sólo puede haber un reno por establo.

Tu tarea es calcular el mínimo número de movimientos necesarios para que todos los renos acaben en un establo.

Nota: Ten en cuenta que el array de establos siempre tendrá el mismo tamaño que el array de renos y que siempre los establos serán únicos.

Ejemplo
```javascript
minMovesToStables([2, 6, 9], [3, 8, 5]) // -> 3
// Explicación:
// Renos en posiciones: 2, 6, 9
// Establos en posiciones: 3, 8, 5
// 1er reno: se mueve de la posición 2 al establo en la posición 3 (1 movimiento).
// 2do reno: se mueve de la posición 6 al establo en la posición 5 (1 movimiento)
// 3er reno: se mueve de la posición 9 al establo en la posición 8 (1 movimiento).
// Total de movimientos: 1 + 1 + 1 = 3 movimientos

minMovesToStables([1, 1, 3], [1, 8, 4])
// Explicación:
// Renos en posiciones: 1, 1, 3
// Establos en posiciones: 1, 8, 4
// 1er reno: no se mueve (0 movimientos)
// 2do reno: se mueve de la posición 1 al establo en la posición 4 (3 movimientos)
// 3er reno: se mueve de la posición 3 al establo en la posición 8 (5 movimientos)
// Total de movimientos: 0 + 3 + 5 = 8 movimientos

```
<ul>
  <li> <a href="/js/14-Acomodando-los-renos.js"> Resolution Js ⭐⭐⭐⭐⭐ </a> </li>
</ul>

---

### <a name="reto-15-️-dibujando-tablas"> Reto #15: ✏️ Dibujando tablas </a>

<h3> Fácil 🟢 </h3>

Al Polo Norte ha llegado ChatGPT y el elfo Sam Elfman está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función drawTable que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:

- Tiene una cabecera con el nombre de la columna.
- El nombre de la columna pone la primera letra en mayúscula.
- Cada fila debe contener los valores de los objetos en el orden correspondiente.
- Cada valor debe estar alineado a la izquierda.
- Los campos dejan siempre un espacio a la izquierda.
- Los campos dejan a la derecha el espacio necesario para alinear la caja.
Mira el ejemplo para ver cómo debes dibujar la tabla:

```javascript

drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+

```
<ul>
  <li> <a href="/js/15-dibujando-tablas.js"> Resolution Js ⭐⭐⭐ </a> </li>
</ul>