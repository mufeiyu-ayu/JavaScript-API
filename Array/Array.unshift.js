let ary = [1, 2, 3, 4, 5]
// let res = ary.unshift(10, 11, 12, [1, 2, 3, 4])
// console.log(res) // 5 返回的是数组的长度
// console.log(ary) // 会修改原数组
Array.prototype.myUnshift = function () {
    let ary = arguments,
        newAry = [...ary, ...this]
    for (let i = 0; i < newAry.length; i++) {
        this[i] = newAry[i]
    }
    return newAry.length
}
let res1 = ary.myUnshift(10, [1, 2, 3, 4])
console.log(ary)
console.log(res1)
