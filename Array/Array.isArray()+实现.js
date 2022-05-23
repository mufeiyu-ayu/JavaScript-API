// Array.isArray() 用于确定传递的值是否是一个 Array。
// console.log(Array.isArray([1, 2, 3])) // true
// console.log(Array.isArray(123)) // false
Array.isArrayMy = function (arg) {
    return Object.prototype.toString.call(arg) === '[object Array]'
}
console.log(Array.isArrayMy([1, 2, 3])) // true
console.log(Array.isArrayMy('asdas')) // false
