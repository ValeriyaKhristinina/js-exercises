var example = {
  className: 'open menu'
}

function addClass (obj, cls) {
  var arrayClassName = obj.className.split(' ')
  if (arrayClassName.indexOf(cls) != -1) {
    return obj
  }
  arrayClassName.push(cls)
  obj.className = arrayClassName.join(' ')
  return obj
}

console.log(addClass(example, 'new'))
console.log(example)

addClass(example, 'open')
console.log(example)

console.log("Alo-alo")
