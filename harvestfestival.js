const finalPosition = function (moves) {
  let final = [0,0];
for (let direction of moves) {
  switch (direction) {
    case 'north':
      final[1]++;
      break;
    case 'east':
      final[0]++;
      break;
    case 'south':
      final[1]--;
      break;
    case 'west':
      final[0]--;
      break;
    }
  }
  return final;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']

console.log(finalPosition(moves));