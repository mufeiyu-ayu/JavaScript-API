// map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
const ary = [1, 2, 3, 4, 5]
const res = ary.map((item) => item * 2)
// console.log(res) //[ 2, 4, 6, 8, 10 ]
let sum = 0
const res1 = ary.map((item) => {
    sum += item
    return sum
})
console.log(sum)

// 封装深拷贝
const deepCopy = function (oldObj, newObj) {
    let target = newObj || {}
    toStr = Object.prototype.toString
    // 遍历
    for (let key in oldObj) {
        if (oldObj.hasOwnProperty(key)) {
            if (typeof oldObj[key] === 'object' && oldObj[key] !== null) {
                if (toStr.call(oldObj[key]) === '[object Array]') {
                    target[key] = []
                } else {
                    target[key] = {}
                }
                deepCopy(oldObj[key], target[key])
            } else {
                target[key] = oldObj[key]
            }
        }
    }
    return target
}

Array.prototype.myMap = function (fn) {
    let arr = this,
        len = arr.length,
        arg2 = arguments[1] || window,
        newArr = [],
        item
    for (let i = 0; i < len; i++) {
        item = deepCopy(arr[i])
        newArr.push(fn.apply(arg2, [item, i, arr]))
    }
    return newArr
}
