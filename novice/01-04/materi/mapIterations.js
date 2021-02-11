const map = new Map([
  [1970, 'bell bottoms'],
  [1980, 'leg warmers'],
  [1990, 'flannel'],
])

// Map
// Map.prototype.forEach((value, key, map) = () => {}

// Array
// Array.prototype.forEach((item, index, array) = () => {}
// map.forEach((value, key) => {
//   console.log(`${key}: ${value}`)
// })
for (const [key, value] of map) {
  // Log the keys and values of the Map with for...of
  console.log(`${key}: ${value}`)
}