// some() 方法测试数组中是不是至少有1个元素通过了被提供的函数测试。它返回的是一个Boolean类型的值。
// arr.some(callback(element[, index[, array]])[, thisArg])

Array.prototype.mySome = function (fn) {
    let arr = this,
        arg2 = arguments[1] || window,
        len = arr.length,
        res = true
    for (let i = 0; i < len; i++) {
        if (fn.applly(arg2, [arr[i], i, arr])) {
            res = true
            break
        }
    }
    return res
}
