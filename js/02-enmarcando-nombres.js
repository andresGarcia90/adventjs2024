function createFrame(names) {
  if (names.length === 0) return "";
  
  let maxLength = 0;
  names.forEach(name => {
    if (name.length > maxLength) maxLength = name.length;
  });

  const namesWithWithSpaces = names.map(name => {
    const spaces = ' '.repeat(maxLength - name.length);
    return `* ${name}${spaces} *`;
  });

  const border = '*'.repeat(maxLength + 4);

  return [border, ...namesWithWithSpaces, border].join("\n");
}