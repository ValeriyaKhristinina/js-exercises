var person = ['Petr', 26, true, 'Orange']

function find (array, value) {
  for (var i = 0; i < array.length; i++) {
    if (value === array[i]) return i
  }

  return -1
}
console.log(find(person, 26))
