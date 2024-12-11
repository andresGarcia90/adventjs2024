function drawRace(indices, length) {
  const createWave = (count) => "~".repeat(count);
  const race = indices.map((indice, index) => {
    const space = " ".repeat( (indices.length -1 )-index);
    const position = ` /${index + 1}`;
    
    if (indice === 0) return `${space}${"~".repeat(length)}${position}`;

    const absNum = Math.abs(indice);
    const before = indice < 0 ? length - absNum : indice;
    const after = indice < 0 ? absNum - 1 : (length - indice)-1

    // if (indice < 0) { const indiciePos= indice * (-1); return `${space}${"~".repeat(length - indiciePos)}r${"~".repeat(indiciePos-1)}${position}`}
    // if (indice > 0) { return `${space}${"~".repeat(indice)}r${"~".repeat((length - indice)-1)}${position}`}
    return `${space}${createWave(before)}r${createWave(after)}${position}`
  });
  return race.join("\n");
}

const race = drawRace([0, 5, -3], 10);
console.log(race);
