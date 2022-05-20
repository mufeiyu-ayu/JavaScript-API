/* 
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
 */
let arr = [10, 20, 30, 40]
// let resArr = arr.filter(function (item) {
//     return item > 30
// })
// console.log(resArr) // 40
Array.prototype.myFilter = function (fn, thisArg) {
    let arr = thisArg || this
    let newArr = []
    if (typeof fn !== 'function') {
        throw new Error(fn + 'is not a function')
    }
    if (!arr.length) {
        return []
    }
    for (let i = 0; i < arr.length; i++) {
        if (fn.call(arr, arr[i], i, arr)) {
            newArr.push(arr[i])
        }
    }
    return newArr
}
let res = arr.myFilter(function (item) {
    return item > 30
})
console.log(res)
