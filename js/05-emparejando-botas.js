function organizeShoes(shoes) {
  const pairOfShoes = [];
  const shoeCounts = new Map();

  for (const { type, size } of shoes) {
    const oppositeType = type === 'I' ? 'R' : 'I';
    const oppositeKey = `${oppositeType}_${size}`;
    const currentKey = `${type}_${size}`;

    if (shoeCounts.get(oppositeKey) > 0) {
      shoeCounts.set(oppositeKey, shoeCounts.get(oppositeKey) - 1);
      pairOfShoes.push(size);
    } else {
      shoeCounts.set(currentKey, (shoeCounts.get(currentKey) || 0) + 1);
    }
  }

  return pairOfShoes;
}
const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 38 }
];
console.log(organizeShoes(shoes));
