// reduceRight() 方法接受一个函数作为累加器（accumulator）和数组的每个值（从右到左）将其减少为单个值。
// 与reduce原理相同，只是reduce从数组底部开始，而reduce从顶部开始，（反着来）
Array.prototype.myReduceRight = function (fn, initialValue) {
    let arr = this,
        len = arr.length,
        arg = arguments[2] || window
    for (let i = len - 1; i >= 0; i--) {
        initialValue = fn.apply(arg, [initialValue, arr[i], i, arr])
    }
    return initialValue
}
const arr = [1, 2, 3, 4, 5]
let res1 = arr.reduceRight((initialValue, item) => {
    initialValue.push(item)
    return initialValue
}, [])
// console.log(res1) // [5, 4, 3, 2, 1]
let res2 = arr.myReduceRight((initialValue, item) => {
    initialValue.push(item)
    return initialValue
}, [])
// console.log(res2) // [5, 4, 3, 2, 1]
