/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */

function createFrame(names) {
  let maxLength = 0;
  names.forEach(name => {
    if (name.length > maxLength) maxLength = name.length;
  });

  const namesWithSpaces = names.map(name => {
    const spaces = ' '.repeat(maxLength - name.length);
    return `* ${name}${spaces} *`;
  });

  const border = '*'.repeat(maxLength + 4);

  return [border, ...namesWithSpaces, border].join("\n");
}


module.exports = createFrame;