<h1 align="center">Advent Js 2024</h1>
<h3 align="center">Resolution of problematic in AdventJs</h3>
<h3 align="center">This project was created resolving the problems in the site  <a href="https://adventjs.dev/es"> adventjs.dev </a>.</h3>
<h3 align="center">Thanks Midudev to create this problems  <a href="https://midu.dev/"> midu.dev </a>.</h3>

|#| Retos | Solución | Resultado | Nivel |
| :-: | :-: | :-: | :-: | :-: |
|01| Reto #1: 🎁 ¡Primer regalo repetido!| [Solucion](./js/01-primer-regalo/README.md)|⭐⭐⭐⭐⭐| 🟢 |
|02| Reto #2: 🖼️ Enmarcando nombres| [Solucion](./js/02-enmarcando_nombres/README.md)|⭐⭐⭐⭐⭐| 🟢 |
|03| Reto #3: 🏗️ Organizando el inventario | [Solucion](./js/03-organizando_juguetes//README.md)|⭐⭐⭐⭐⭐| 🟢 |
|04| Reto #4: 🎄 Decorando el árbol de Navidad | [Solucion](./js/04-decorando_el_arbol_de_navidad/README.md)|⭐⭐⭐⭐⭐| 🟠 |
|05| Reto #5: 👞 Emparejando botas | [Solucion](./js/05-emparejando_botas/README.md)|⭐⭐⭐⭐⭐| 🟢 |
|06| Reto #6: 📦 ¿Regalo dentro de la caja? | [Solucion](./js/06-regalo_dentro_de_la_caja/README.md)|⭐⭐⭐⭐⭐| 🟠 |
|07| Reto #7: 👹 El ataque del Grinch | [Solucion](./js/07_el_ataque_del_grinch/README.md)|⭐⭐⭐⭐| 🟠 |
|08| Reto #8: 🦌 La carrera de renos | [Solucion](./js/08-carrera_de_renos/README.md)|⭐⭐⭐| 🟢 |
|09| Reto #9: 🚂 El tren mágico | [Solucion](./js/09_el_tren_magico/README.md)|⭐| 🟠 |
|10| Reto #10: 👩‍💻 El ensamblador élfico | [Solucion](./js/10-el_esamblador_elfico/README.md)|⭐| 🟠 |
|11|Reto #11: 🏴‍☠️ Nombres de archivos codificados | [Solucion](./js/11-nombres_de_archivos_codificados/README.md)|⭐⭐⭐⭐⭐| 🟢 |
|11|Reto #12: 💵 ¿Cuánto cuesta el árbol? | [Solucion](./js/12-cuanto_cuesta_un_arbol/readme.md)|⭐⭐⭐| 🟢 |

---
## List of problems
- [List of problems](#list-of-problems)
  - [ Reto #14: 🦌 Acomodando los renos ](#-reto-14--acomodando-los-renos-)
  - [ Reto #15: ✏️ Dibujando tablas ](#-reto-15-️-dibujando-tablas-)
  - [Reto #16: ❄️ Limpiando la nieve del camino ](#reto-16-️-limpiando-la-nieve-del-camino-)
  - [ Reto #20: 🎁 Encuentra los regalos faltantes y duplicados ](#-reto-20--encuentra-los-regalos-faltantes-y-duplicados-)
  - [ Reto #21: 🎄 Calcula la altura del árbol de Navidad ](#-reto-21--calcula-la-altura-del-árbol-de-navidad-)
  - [ Reto #23: 🔢 Encuentra los números perdidos ](#-reto-23--encuentra-los-números-perdidos-)
  - [ Reto #25: Ejecuta el lenguaje mágico ](#-reto-25-ejecuta-el-lenguaje-mágico-)




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

---

### <a name="reto-16-️-limpiando-la-nieve">Reto #16: ❄️ Limpiando la nieve del camino </a>

<h3> Fácil 🟢 </h3>

Los elfos están trabajando arduamente para limpiar los caminos llenos de nieve mágica ❄️. Esta nieve tiene una propiedad especial: si dos montículos de nieve idénticos y adyacentes se encuentran, desaparecen automáticamente.

Tu tarea es escribir una función que ayude a los elfos a simular este proceso. El camino se representa por una cadena de texto y cada montículo de nieve un carácter.

Tienes que eliminar todos los montículos de nieve adyacentes que sean iguales hasta que no queden más movimientos posibles.

El resultado debe ser el camino final después de haber eliminado todos los montículos duplicados:

```javascript
removeSnow('zxxzoz') // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

removeSnow('abcdd') // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

removeSnow('zzz') // -> "z"
// 1. Eliminamos "zz", quedando "z"

removeSnow('a') // -> "a"
// No hay montículos repetidos

```
<ul>
  <li> <a href="/js/16-limpiando-nieve.js"> Resolution Js ⭐⭐⭐⭐ </a> </li>
</ul>

---

### <a name="reto-20-️-encuentra-regalos"> Reto #20: 🎁 Encuentra los regalos faltantes y duplicados </a>

<h3> Fácil 🟢 </h3>

Santa Claus 🎅 está revisando la lista de regalos que debe entregar esta Navidad. Sin embargo, algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas. Necesita tu ayuda para resolver el problema.

Recibirás dos arrays:

received: Lista con los regalos que Santa tiene actualmente.
expected: Lista con los regalos que Santa debería tener.
Tu tarea es escribir una función que, dado received y expected, devuelva un objeto con dos propiedades:

missing: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.
extra: Un objeto donde las claves son los nombres de los regalos extra o duplicados y los valores son las cantidades que sobran.
Ten en cuenta que:

Los regalos pueden repetirse en ambas listas.
Las listas de regalos están desordenadas.
Si no hay regalos que falten o sobren, las propiedades correspondientes (missing o extra) deben ser objetos vacíos.

```javascript

fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
)
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }

```
<ul>
  <li> <a href="/js/20-encuentre-los-regalos.js"> Resolution Js ⭐⭐⭐⭐⭐ </a> </li>
</ul>

---

### <a name="reto-21-️-altura-regalo"> Reto #21: 🎄 Calcula la altura del árbol de Navidad </a>

<h3> Fácil 🟢 </h3>

Santa Claus 🎅 está decorando un árbol de Navidad mágico 🪄, que este año tiene una estructura especial en forma de árbol binario. Cada nodo del árbol representa un regalo, y Santa quiere saber la altura del árbol para colocar la estrella mágica en la punta.

Tu tarea es escribir una función que calcule la altura de un árbol binario. La altura de un árbol binario se define como el número máximo de niveles desde la raíz hasta una hoja. Un árbol vacío tiene una altura de 0.

```javascript
// Definición del árbol
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
treeHeight(tree)
// Devuelve: 3

```
<ul>
  <li> <a href="/js/21-calcula-la-altura.js"> Resolution Js ⭐ </a> </li>
</ul>

---

### <a name="reto-23-️-encuentra-numeros-perdidos"> Reto #23: 🔢 Encuentra los números perdidos </a>

<h3> Fácil 🟢 </h3>

Los elfos están trabajando en un sistema para verificar las listas de regalos de los niños 👧👦. Sin embargo, ¡algunas listas están incompletas y faltan números!

Tu tarea es escribir una función que, dado un array de números, encuentre todos los números que faltan entre 1 y n (donde n es el tamaño del array o el número más alto del array).

Eso sí, ten en cuenta que:

Los números pueden aparecer más de una vez y otros pueden faltar
El array siempre contiene números enteros positivos
Siempre se empieza a contar desde el 1

```javascript
findMissingNumbers([1, 2, 4, 6])
// [3, 5]

findMissingNumbers([4, 8, 7, 2])
// [1, 3, 5, 6]

findMissingNumbers([3, 2, 1, 1])
// []

findDisappearedNumbers([5, 5, 5, 3, 3, 2, 1])
// [4]

```
<ul>
  <li> <a href="/js/23-encuentra-numeros.js"> Resolution Js ⭐⭐⭐⭐ </a> </li>
</ul>

---

### <a name="reto-25-ejecuta-lenguaje-magico"> Reto #25: Ejecuta el lenguaje mágico </a>

<h3> Medio 🟠 </h3>

¡Ya hemos repartido todos los regalos! De vuelta al taller, ya comienzan los preparativos para el año que viene.

Un elfo genio está creando un lenguaje de programación mágico 🪄, que ayudará a simplificar la entrega de regalos a los niños en 2025.

Los programas siempre empiezan con el valor 0 y el lenguaje es una cadena de texto donde cada caracter representa una instrucción:

> Se mueve a la siguiente instrucción
+ Incrementa en 1 el valor actual
- Decrementa en 1 el valor actual
[ y ]: Bucle. Si el valor actual es 0, salta a la instrucción después de ]. Si no es 0, vuelve a la instrucción después de [
{y }: Condicional. Si el valor actual es 0, salta a la instrucción después de }. Si no es 0, sigue a la instrucción después de {
Tienes que devolver el valor del programa tras ejecutar todas las instrucciones.

```javascript
execute('+++') // 3
execute('+--') // -1
execute('>+++[-]') // 0
execute('>>>+{++}') // 3
execute('+{[-]+}+') // 2
execute('{+}{+}{+}') // 0
execute('------[+]++') // 2
execute('-[++{-}]+{++++}') // 5
// [4]

```

Nota: Un condicional puede tener un bucle dentro y también un bucle puede tener un condicional. Pero nunca se anidan dos bucles o dos condicionales.

<ul>
  <li> <a href="/js/25-ejecuta-el-lenguaje.js"> Resolution Js ⭐⭐⭐⭐⭐ </a> </li>
</ul>