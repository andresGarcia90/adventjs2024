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

module.exports = findInAgenda;