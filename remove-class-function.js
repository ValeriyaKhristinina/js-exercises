var example = {
  className: 'open menu apple mountain'
}

function removeClass (obj, cls) {
  var arrayClassName = obj.className.split(' ')
  for (var i = 0; i < arrayClassName.length; i++) {
    if (arrayClassName[i] === cls) {
      arrayClassName.splice(i, 1)
      i--
    }
  }
  obj.className = arrayClassName.join(' ')
  return obj
}
console.log(removeClass(example, 'open'));
console.log(removeClass(example, 'orange'));
