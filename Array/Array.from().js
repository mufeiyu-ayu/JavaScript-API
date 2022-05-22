// Array.from(arrayLike[, mapFn[, thisArg]])
const str = 'abcdefg'
const aa = [1]
const res1 = Array.from(str)
// console.log(res1) //[  'a', 'b', 'c','d', 'e', 'f', 'g']
const res2 = Array.from(str, (item) => {
    return item + 'h'
})
// Array.from() 方法有一个可选参数 mapFn，让你可以在最后生成的数组上再执行一次 map 方法后再返回。也就是说 Array.from(obj, mapFn, thisArg) 就相当于 Array.from(obj).map(mapFn, thisArg), 除非创建的不是可用的中间数组。 这对一些数组的子类,如 typed arrays 来说很重要, 因为中间数组的值在调用 map() 时需要是适当的类型。
console.log(res2)
/* 
[
  'ah', 'bh',
  'ch', 'dh',
  'eh', 'fh',
  'gh'
]
 */
const numStr = '123456'
const res = Array.from(numStr, (item) => {
    return Number(item) * 3
})
console.log(res)
