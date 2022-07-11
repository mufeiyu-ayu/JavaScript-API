/* Object.is() 方法判断两个值是否为同一个值。返回一个布尔值 */
let a = NaN
let b = NaN
console.log(Object.is(a, b)) // true
a = {}
b = {}
console.log(Object.is(a, b)) // false
