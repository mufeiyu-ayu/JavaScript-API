// arr.includes(valueToFind[, fromIndex])
/* includes() 方法有意设计为通用方法。它不要求this值是数组对象，所以它可以被用于其他类型的对象 (比如类数组对象)。下面的例子展示了 在函数的 arguments 对象上调用的 includes() 方法。 */
const aa = 'dadada'
console.log(aa.includes('d', 1)) // true
console.log(aa.includes('d', 5)) // true
const arr = [1, 2, 3, 4, 5, NaN, 0]
// 0 的值将全部视为相等，与符号无关（即 -0 与 0 和 +0 相等），但 false 不被认为与 0 相等。=> MDN
console.log(arr.includes(NaN)) // true  采用了通值相等中对NaN的措施
console.log(arr.includes(+0)) // true 这里却没有对+0，-0做比较
