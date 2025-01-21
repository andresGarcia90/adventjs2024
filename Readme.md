<h1 align="center">Advent Js 2024</h1>
<h3 align="center">Resolution of problematic in AdventJs</h3>
<h3 align="center">This project was created resolving the problems in the site  <a href="https://adventjs.dev/es"> adventjs.dev </a>.</h3>
<h3 align="center">Thanks Midudev to create this problems  <a href="https://midu.dev/"> midu.dev </a>.</h3>

|#| Retos | Solución | Resultado | Nivel |
| :-: | :-: | :-: | :-: | :-: |
|01| Reto #1: 🎁 ¡Primer regalo repetido!| [Solution](./js/01-primer-regalo/README.md)|⭐⭐⭐⭐⭐| 🟢 |
|02| Reto #2: 🖼️ Enmarcando nombres| [Solution](./js/02-enmarcando_nombres/README.md)|⭐⭐⭐⭐⭐| 🟢 |
|03| Reto #3: 🏗️ Organizando el inventario | [Solution](./js/03-organizando_juguetes//README.md)|⭐⭐⭐⭐⭐| 🟢 |
|04| Reto #4: 🎄 Decorando el árbol de Navidad | [Solution](./js/04-decorando_el_arbol_de_navidad/README.md)|⭐⭐⭐⭐⭐| 🟠 |
|05| Reto #5: 👞 Emparejando botas | [Solution](./js/05-emparejando_botas/README.md)|⭐⭐⭐⭐⭐| 🟢 |
|06| Reto #6: 📦 ¿Regalo dentro de la caja? | [Solution](./js/06-regalo_dentro_de_la_caja/README.md)|⭐⭐⭐⭐⭐| 🟠 |
|07| Reto #7: 👹 El ataque del Grinch | [Solution](./js/07_el_ataque_del_grinch/README.md)|⭐⭐⭐⭐| 🟠 |
|08| Reto #8: 🦌 La carrera de renos | [Solution](./js/08-carrera_de_renos/README.md)|⭐⭐⭐| 🟢 |
|09| Reto #9: 🚂 El tren mágico | [Solution](./js/09_el_tren_magico/README.md)|⭐| 🟠 |
|10| Reto #10: 👩‍💻 El ensamblador élfico | [Solution](./js/10-el_esamblador_elfico/README.md)|⭐| 🟠 |
|11| Reto #11: 🏴‍☠️ Nombres de archivos codificados | [Solution](./js/11-nombres_de_archivos_codificados/README.md)|⭐⭐⭐⭐⭐| 🟢 |
|12| Reto #12: 💵 ¿Cuánto cuesta el árbol? | [Solution](./js/12-cuanto_cuesta_un_arbol/readme.md)|⭐⭐⭐| 🟢 |
|13| Reto #13: 🤖 ¿El robot está de vuelta? | [Solution](./js/13-robot-devuelta/readme.md)|⭐| 🔴 |
|14| Reto #14: 🦌 Acomodando los renos | [Solution](./js/14-Acomodando_los_renos/readme.md)|⭐⭐⭐⭐⭐| 🟢 |
|15| Reto #15: ✏️ Dibujando tablas | [Solution](./js/15-dibujando_tablas/readme.md)|⭐⭐⭐| 🟢 |
|16| Reto #16: ❄️ Limpiando la nieve del camino | [Solution](./js/16-limpiando_nieve/readme.md)|⭐⭐⭐⭐| 🟢 |
|17| Reto #17: 💣 Buscando las bombas del Grinch | [Solution](./js/17-busca_bombas/readme.md)|⭐⭐⭐| 🟠 |
|18| Reto #18: 📇 La agenda mágica de Santa | [Solution](./js/18-agenda_magica/readme.md)|⭐| 🔴 |
|19| Reto #19: 📦 Apila cajas mágicas para repartir regalos | [Solution](./js/19-apliar_cajas/readme.md)|nope| 🔴 |
|20| Reto #20: 🎁 Encuentra los regalos faltantes y duplicados | [Solution](./js/20-encuentre_los_regalos/readme.md)|⭐⭐⭐⭐⭐| 🟢 |

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