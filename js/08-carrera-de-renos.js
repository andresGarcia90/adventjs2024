function drawRace(indices, length) {
  const raceLength = indices.length -1;
  const race = indices.map((indice, index) => {
    if (indice === 0) { return `${" ".repeat(raceLength-index)}${"~".repeat(length)} /${index + 1}`}
    if (indice < 0) { const indiciePos= indice * (-1); return `${" ".repeat(raceLength-index)}${"~".repeat(length - indiciePos)}r${"~".repeat(indiciePos-1)} /${index + 1}`}
    if (indice > 0) { return `${" ".repeat(raceLength-index)}${"~".repeat(indice)}r${"~".repeat((length - indice)-1)} /${index + 1}`}
  });
  return race.join("\n");
}

const race = drawRace([0, 5, -3], 10);
console.log(race);
