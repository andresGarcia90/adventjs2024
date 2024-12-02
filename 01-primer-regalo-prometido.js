function prepareGifts(gifts) {
  if (!gifts) return [];
  if ( gifts.lenght == 0 ) return [];
  return [...new Set(gifts.sort((a, b) => a - b)) ]
}