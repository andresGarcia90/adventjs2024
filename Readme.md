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
  <li><a href="/js/01-primer-regalo-prometido.js"> Resolution JS ⭐⭐⭐ </a></li>
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
    <a href="/js/02-enmarcando-nombres.js"> Resolution ⭐⭐⭐</a>
  </li>
  <li>
    <a href="/ts/02-enmarcando-nombres.ts"> Resolution ⭐⭐⭐⭐</a>
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

<a href="/js/03-organizando-juguetes.js"> Resolution ⭐⭐⭐</a>


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

<a href="/js/04-decorando-el-arbol-de-navidad.js"> Resolution ⭐⭐⭐⭐</a>

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

<a href="/js/05-emparejando-botas.js"> Resolution ⭐⭐ </a>

---