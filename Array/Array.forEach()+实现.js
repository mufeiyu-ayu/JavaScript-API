// const arr = [1, 2, 3, 4, 5]
// const res = arr.forEach(function (element, index, arr) {
//     // console.log(element, index, arr)
//     console.log(this)
// }) //这里的参数用来改变foreach中callback回调函数的this指向
// console.log(res) // undefined
// console.log(arr)
/*
 除了抛出异常以外，没有办法中止或跳出 forEach() 循环。
 如果你需要中止或跳出循环，forEach() 方法不是应当使用的工具。 

 forEach() 为每个数组元素执行一次 callback 函数；与 map() 或者 reduce() 不同的是，它总是返回 undefined 值，并且不可链式调用。其典型用例是在一个调用链的最后执行副作用（side effects，函数式编程上，指函数进行 返回结果值 以外的操作）
 */

Array.prototype.myForEach = function (fn) {
    const arr = this,
        len = arr.length,
        arg2 = arguments[1] || window
    for (let i = 0; i < len; i++) {
        fn.apply(arg2, [arr[i], i, arr])
    }
}
const arr2 = [1, 2, 3, 4]
arr2.myForEach(
    function (element, index, arr) {
        // console.log(element)
        // console.log(index);
        // console.log(arr);
        // console.log(this)
    },
    { a: 1 }
)
