/* 
var newArray = arr.filter(callback(element[, index[, array]])[, thisArg])
 */
let arr = [10, 20, 30, 40]
let resArr = arr.filter(function (item) {
    return item > 30
})
console.log(resArr) // 40
Array.prototype.myFilter = function (fn, thisArg = window) {
    let newAry = [],
        ary = this,
        len = ary.length
    for (let i = 0; i < len; i++) {
        console.log(thisArg)

        if (fn.call(thisArg, ary[i], i, ary)) {
            newAry.push(ary[i])
        }
    }
    return newAry
}

let res = arr.myFilter1(
    function (item) {
        return item > 10
    },
    { a: 1 }
)
// console.log(res)
const ary = [
    { name: 'jack', age: 22 },
    { name: 'lucy', age: 33 },
    { name: 'mike', age: 15 },
    { name: 'jano', age: 32 },
    { name: 'jone', age: 17 }
]
let res2 = ary.filter(function (item) {
    return item.age > 25
})
// console.log(res2)
// res2[0].age = 50
// console.log(res2)
// console.log(ary)
/* 0: {name: 'jack', age: 22}
1: {name: 'lucy', age: 50} 我们对过滤后的数组进行数据更改操作，但是也间接更改了原数组的数据，是因为我们直接将符合条件的数据push到新数组中，拿到的是引用值，我们需要使用深拷贝对其封装，使原数组和过滤后的数组不存在引用关系
2: {name: 'mike', age: 15}
3: {name: 'jano', age: 32}
4: {name: 'jone', age: 17} */
/* map和filter返回的数组也是部分深拷贝，只对第一层进行了深拷贝=》 既filter返回的是一个浅拷贝的数据*/

// 完善后方法
// 封装深拷贝
const deepCopy = function (oldObj, newObj) {
    let target = newObj || {}
    toStr = Object.prototype.toString
    // 遍历
    for (let key in oldObj) {
        if (oldObj.hasOwnProperty(key)) {
            if (typeof oldObj[key] === 'object' && typeof oldObj[key] !== null) {
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

Array.prototype.myFilter2 = function (fn) {
    let arr = this,
        len = arr.length,
        arg2 = arguments[1] || window,
        newAry = [],
        item
    for (let i = 0; i < len; i++) {
        if (fn.apply(arg2, [arr[i], i, arr])) {
            item = deepCopy(arr[i])
            newAry.push(item)
        }
    }
    return newAry
}
let res3 = ary.myFilter2(function (item) {
    return item.age > 25
})
// console.log(res3)
res3[0].age = 50
// console.log(ary) // 不发生改变
