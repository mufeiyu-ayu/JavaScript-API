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

Array.prototype.myEvery = function (fn, thisValue) {
    let arr = thisValue || this // thisValue有值就以thisvalue为准
    if (typeof fn !== 'function') {
        throw new Error('fn is not a function')
    }
    // 空数组 返回 true
    if (!arr.length) {
        return true
    }
    // fn函数存在3个参数
    for (let i = 0; i < arr.length; i++) {
        // 依次调用3次函数，如果不成立则返回false
        if (!fn.call(this, arr[i], i, arr)) {
            return false
        }
    }
    return true
}
const arr3 = arr1.myEvery(function (item, index, arr) {
    console.log(arr)
    return item < 50
})
