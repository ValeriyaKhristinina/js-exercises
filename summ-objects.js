var salaries = {
  'Vasya': 100,
  'Petya': 200,
  'Misha': 300
}
var sum = 0

for (var key in salaries) {
  sum = sum + salaries[key]
}
console.log(sum)
