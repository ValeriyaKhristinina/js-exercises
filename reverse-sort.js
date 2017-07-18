function sortReverse (array) {
  var reverseArray = []
  function compareNumeric (a, b) {
    if (a > b) return 1
    if (a < b) return -1
  }
  reverseArray = array.sort(compareNumeric)
  reverseArray.reverse()
  return reverseArray
}

var number = [3, 56, 6, 1, -5, 9, 10, 2]

console.log(sortReverse(number))

console.log(number)
