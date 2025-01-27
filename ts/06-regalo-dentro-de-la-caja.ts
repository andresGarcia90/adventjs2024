function inBoxTs(box: string[]): boolean {
  for (let j = 1; j < box.length - 1; j++) {
    const line = box[j];
    const presentIndex = line.indexOf('*');
    if (presentIndex === -1) continue;
    if (presentIndex === 0 || presentIndex === line.length - 1) return false;
    return true;
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
