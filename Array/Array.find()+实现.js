const arr1 = [1, 2, 3, 4, 5]
Array.prototype.myFind = function (fn, thisArg) {
    const arr = thisArg || this
    if (typeof fn !== 'function') {
        throw new Error(fn + 'is not a function')
    }
    if (!arr.length) {
        return undefined
    }
    let res
    for (let i = 0; i < arr.length; i++) {
        res = fn.call(arr, arr[i], i, arr) // 每一次数组能否正常执行
        if (res) {
            return arr[i]
        }
    }
    return undefined
}
let ress = arr1.myFind(function (item) {
    return item > 3
})
console.log(arr1)
