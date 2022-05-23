// map() 方法创建一个新数组，这个新数组由原数组中的每个元素都调用一次提供的函数后的返回值组成。
const ary = [1, 2, 3, 4, 5]
const res = ary.map((item) => item * 2)
console.log(res) //[ 2, 4, 6, 8, 10 ]
Array.prototype.myMap = function (fn, thisArg) {
    let newAry = []
    const ary = thisArg || this
    if (typeof fn !== 'function') {
        throw new Error(fn + 'is not a function')
    }
    for (let i = 0; i < ary.length; i++) {
        newAry.push(fn(ary[i], i, ary))
    }
    return newAry
}
let res1 = ary.myMap((item, index, arr) => {
    return item * 3
})
console.log(res1)
