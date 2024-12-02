<h1 align="center">Advent Js 2024</h1>
<h3 align="center">Resolution of problematic in AdventJs</h3>
<h3 align="center">This project was created resolving the problems in the site  <a href="https://adventjs.dev/es"> adventjs.dev </a>.</h3>

---
## List of problems
- [List of problems](#list-of-problems)
  - [Reto #1: 🎁 ¡Primer regalo repetido! ](#reto-1--primer-regalo-repetido-)
  - [ Reto #2: 🖼️ Enmarcando nombres ](#-reto-2-️-enmarcando-nombres-)
---
### <a name="reto-1--primer-regalo-repetido">Reto #1: 🎁 ¡Primer regalo repetido! </a>
<h3> Fácil ⭐ </h3>
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
<a href="/01-primer-regalo-prometido.js"> Resolution </a>

---
### <a name="reto-2-️-enmarcando-nombres"> Reto #2: 🖼️ Enmarcando nombres </a>
<h3> Fácil ⭐ </h3>
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
<a href="/02-enmarcando-nombres.js"> Resolution </a>


---
