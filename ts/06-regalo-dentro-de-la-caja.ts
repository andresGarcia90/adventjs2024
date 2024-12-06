function inBoxTs(box: string[]): boolean  {
  if (!box || box.length === 0) return false;

  for (let j = 0; j < box.length; j++) {
    const line = box[j];
    if ((j === 0 || j === box.length - 1) && line.includes('*')) return false;

    if (line.includes('*')) {
      const presentIndex = line.indexOf('*');
      if( presentIndex === 0 || presentIndex === line.length - 1  ) return false;
      return true;
    }
  }
  return false;
}

const hasPresent = inBoxTs(['###', '#*#', '###']); // ➞ true

const hasPresent1 = inBoxTs(['####', '#* #', '#  #', '####']); // ➞ true

const hasPresent2 = inBoxTs(['*####', '#   #*', '#   #', '####']); // ➞ false

const hasPresent3 = inBoxTs(['#####', '#   #', '#   #', '#   #', '#####']); // ➞ false

console.log(hasPresent);
console.log(hasPresent1);
console.log(hasPresent2);
console.log(hasPresent3);
