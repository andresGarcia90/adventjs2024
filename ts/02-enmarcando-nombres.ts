function createFrame(names: string[]): string {
  if (names.length === 0) return "";
  
  const maxLength = Math.max(...names.map(name => name.length));

  const namesWithWithSpaces = names.map(name => {
    const spaces = ' '.repeat(maxLength - name.length);
    return `* ${name}${spaces} *`;
  });

  const border = '*'.repeat(maxLength + 4);

  return [border, ...namesWithWithSpaces, border].join("\n");
}