function organizeInventory(inventory) {
  if (inventory.length === 0) return {};

  const organizedInventory = {};

  inventory.forEach(({category, name, quantity}) => {
    organizedInventory[category] ||= {};
    organizedInventory[category][name] = (organizedInventory[category][name] || 0) + quantity;
  });

  return organizedInventory;
};



const inventary = [
  { name: 'doll', quantity: 5, category: 'toys' },
  { name: 'car', quantity: 3, category: 'toys' },
  { name: 'ball', quantity: 2, category: 'sports' },
  { name: 'car', quantity: 2, category: 'toys' },
  { name: 'racket', quantity: 4, category: 'sports' }
];


const inventary2 = [
  { name: 'book', quantity: 10, category: 'education' },
  { name: 'book', quantity: 5, category: 'education' },
  { name: 'paint', quantity: 3, category: 'art' }
]

console.log(organizeInventory(inventary));

console.log(organizeInventory(inventary2));
