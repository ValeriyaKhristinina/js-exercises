var menu = {
  width: 200,
  height: 300,
  title: 'My menu'
}

function isNumeric (n) {
  return !isNaN(parseFloat(n)) && isFinite(n)
}

function multiplyNumeric (object) {
  for (var key in menu) {
    if (isNumeric(menu[key])) {
      menu[key] = menu[key] * 2
    }
  }
}

multiplyNumeric(menu)

console.log(menu)
