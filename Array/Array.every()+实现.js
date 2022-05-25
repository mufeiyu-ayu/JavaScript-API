/* 
every() 方法测试一个数组内的所有元素是否都能通过某个指定函数的测试。它返回一个布尔值。
全部满足返回true，反之返回false
arr.every(callback(element[, index[, array]])[, thisArg])
 */
const arr1 = [10, 20, 30, 40]

// const arr2 = arr1.every(function (item) {
//     console.log(item)
//     return item < 50
// })
const arr2 = arr1.every((item) => item < 50)
// console.log(arr2)

Array.prototype.myEvery = function (fn) {
    let arr = this,
        arg2 = arguments[1] || window,
        len = arr.length,
        res = true
    for (let i = 0; i < len; i++) {
        if (!fn.applly(arg2, [arr[i], i, arr])) {
            res = false
            break
        }
    }
    return res
}
