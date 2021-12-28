const judgeVegetable = function (vegetables, metric) {
  let benchmark = 0;
  let winner = "";
  vegetables.forEach(function(element, index) {
    if (vegetables[index][metric] > benchmark) {
      benchmark = vegetables[index][metric];
      winner = vegetables[index].submitter;
    }
  });
  return winner;
}

//test input
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric));
