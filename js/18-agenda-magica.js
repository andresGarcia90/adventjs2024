/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
  const agendaLines = agenda.split('\n');
  const allMatches = agendaLines.filter((line) => line.includes(phone));
  if (allMatches.length !== 1) return null;
  const textSplitted = allMatches[0].split(' ');

  const people = { name: '', address: '' };
  for (let i = 0; i < textSplitted.length; i++) {
    if (textSplitted[i].includes('<')) {
      people.name = textSplitted[i].replace('<', '');
    } else if (textSplitted[i].includes('>')) {
      people.name = people.name + ' ' + textSplitted[i].replace('>', '');
    } else if (!textSplitted[i].includes('+')) {
      people.address = people.address + ' ' + textSplitted[i];
    }
  }

  people.address = people.address.trim();

  return people;
}

const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`;

console.log(findInAgenda(agenda, '34-600-123-456'));
