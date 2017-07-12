var salaries = {
  'Вася': 100,
  'Петя': 300,
  'Даша': 250,
  'Никита': 500
}

var max = 0
var maxName = ''

for (var key in salaries) {
  if (max < salaries[key]) {
    max = salaries[key]
    maxName = key
  }
}

console.log(maxName || 'нет сотрудников')
