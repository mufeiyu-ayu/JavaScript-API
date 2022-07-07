// array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
/* 整数，表示要移除的数组元素的个数。如果 deleteCount 大于 start 之后的元素的总数，则从 start 后面的元素都将被删除（含第 start 位）。如果 deleteCount 被省略了，或者它的值大于等于array.length - start(也就是说，如果它大于或者等于start之后的所有元素的数量)，那么start之后数组的所有元素都会被删除。如果 deleteCount 是 0 或者负数，则不移除元素。这种情况下，至少应添加一个新元素。 */
/*  返回值
 由被删除的元素组成的一个数组。如果只删除了一个元素，则返回只包含一个元素的数组。如果没有删除元素，则返回空数组。 */
let ary = ['jack', 'tom', 'mike', 'bob']
let res = ary.splice(1, 1, 'ayu') // res的返回值为删除的tom
// console.log(ary)

let ary1 = [1, 2, 3, 4, 5]
console.log(ary1.splice())
console.log(ary1)
