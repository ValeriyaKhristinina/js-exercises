var array = ['Яблоко', 'Апельсин', 'Груша', 'Лимон']

var min = 0
var max = array.length - 1
var rand = min + Math.floor(Math.random() * (max + 1 - min))  //Код для генерации случайного целого от min to max включительно

console.log(array[rand])
