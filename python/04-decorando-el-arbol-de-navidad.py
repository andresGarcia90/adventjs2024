def create_xmas_tree(height, ornament):
  arrayOfOrnaments = []
  if height >= 1 and height <= 100:
    lengthOfLine = height * 2 - 1
    for i in range(1, height + 1):
      numberOfOrnaments = 2 * i - 1
      offset = int((lengthOfLine - numberOfOrnaments) / 2)
      arrayOfOrnaments.append('_' * offset +ornament * numberOfOrnaments + '_' * offset)
    offsetOfSticks = int((lengthOfLine - 1) / 2)
    arrayOfOrnaments.append('_' * offsetOfSticks + '#' + '_' * offsetOfSticks)
    arrayOfOrnaments.append('_' * offsetOfSticks + '#' + '_' * offsetOfSticks)
    return '\n'.join(arrayOfOrnaments)