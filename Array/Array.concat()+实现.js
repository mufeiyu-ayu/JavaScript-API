/* 
Array.prototype.concat()
此方法不会更改现有数组，而是返回一个新数组。
var new_array = old_array.concat(value1[, value2[, ...[, valueN]]])
value参数可以是数组也可以是普通值，可以进行数组合并，如果不传值，相当于浅拷贝
但是帮助大家去解决这些辣鸡去改变this只想
 */
const arr1 = [1, 2, 3]
const arr2 = [4, 5, 6]
const arr3 = arr1.concat(arr2, 7, 8, 9)
console.log(arr3)

const arr5 = [1, 2, 3]
const arr6 = arr5.concat()
console.log(arr5)
console.log(arr5 === arr6)

const arr7 = [1, 2, 3, 4]
const arr8 = [[5], 6, 7, [[8]]]
const arr9 = arr7.concat(arr8)
console.log(arr9) // [ 1, 2, 3, 4, [ 5 ], 6, 7, [ [ 8 ] ] ]

Array.prototype.myConcat = function (...arg) {
    let newAry = [],
        ary = this
    arg = arg.flat()
    for (let item of [...ary, ...arg]) {
        newAry.push(item)
    }
    return newAry
}
let ar1 = [1, 2, 3, 4]
console.log(ar1.myConcat([5, 6, 7]))
