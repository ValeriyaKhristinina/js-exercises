var number = [2, 7, 5, 9, 2, 45, 6, 70]

function filterRange (array, a, b) {
  var clone = []
  for (var i = 0; i < array.length; i++) {
    if (array[i] >= a && array[i] <= b) {
      clone.push(array[i])
    }
  }
  return clone
}

console.log(filterRange(number, 2, 6))
console.log(filterRange(number, 2, 6))
