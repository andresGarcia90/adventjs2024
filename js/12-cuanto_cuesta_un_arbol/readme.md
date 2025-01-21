### <a name="reto-12-️-cuanto-cuesta"> Reto #12: 💵 ¿Cuánto cuesta el árbol? </a>

<h3> Fácil 🟢 </h3>

Estás en un mercado muy especial en el que se venden árboles de Navidad 🎄. Cada uno viene decorado con una serie de adornos muy peculiares, y el precio del árbol se determina en función de los adornos que tiene.

- *: Copo de nieve - Valor: 1
- o: Bola de Navidad - Valor: 5
- ^: Arbolito decorativo - Valor: 10
- #: Guirnalda brillante - Valor: 50
- @: Estrella polar - Valor: 100
  
Normalmente se sumarían todos los valores de los adornos y ya está…

Pero, ¡ojo! Si un adorno se encuentra inmediatamente a la izquierda de otro de mayor valor, en lugar de sumar, se resta su valor.

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
  <li> <a href="12-cuanto-cuesta-un-arbol.js"> Resolution Js ⭐⭐⭐ </a> </li>
</ul>