function prepareGiftsTs(gifts: number[]): number[] {
  if (!gifts) return [];
  if ( gifts.length == 0 ) return [];
  return [...new Set(gifts.sort((a, b) => a - b)) ]
}