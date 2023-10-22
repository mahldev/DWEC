function randomNumbersBetween (min = 0, max = 1) {
  return Math.random() * (max - min) + min
}

console.log(randomNumbersBetween())
console.log(randomNumbersBetween(1, 9))
