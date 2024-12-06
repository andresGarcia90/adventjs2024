type Shoe = {
  type: 'I' | 'R'
  size: number
}


function organizeShoes(shoes: Shoe[]): number[]  {
  const pairOfShoes: number[]  = [];
  if (shoes.length === 0) return pairOfShoes;

  const mapOfShoes = new Map();

  shoes.forEach(shoe => {
    const oppositeShoe = shoe.type === 'I' ? 'R' : 'I';
    const oppositePair = `${oppositeShoe}_${shoe.size}`;
    if (mapOfShoes.has(oppositePair) && mapOfShoes.get(oppositePair) > 0) {
      mapOfShoes.set(oppositePair, mapOfShoes.get(oppositePair) - 1);
      pairOfShoes.push(shoe.size);
    } else {
      const currentShoe = `${shoe.type}_${shoe.size}`;
      const countCurrent = mapOfShoes.get(currentShoe) || 0;
      mapOfShoes.set(currentShoe, countCurrent + 1);
    }
  });

  return pairOfShoes;
}

const shoes: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 38 }
];
console.log(organizeShoes(shoes));
