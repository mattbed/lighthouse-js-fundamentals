const smartGarbage = function (trash, bins) {
  switch(trash) {
    case "recycling":
      bins.recycling++;
      break;
    case "waste":
      bins.waste++;
      break;
    case "compost":
      bins.compost++;
      break;
  }
  return bins;
}