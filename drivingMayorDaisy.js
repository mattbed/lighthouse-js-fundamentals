const carPassing = function (cars, speed) {
  let speedVar = {
    time: Date.now(),
    speed: speed
  }
  cars.push(speedVar);
  return cars;
}
