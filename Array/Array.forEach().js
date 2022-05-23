const arr = [1, 2, 3, 4, 5]
const res = arr.forEach((item, index, arr) => {
    console.log(item, index, arr)
}, arr)
console.log(res) // undefined
console.log(arr)
/*
 除了抛出异常以外，没有办法中止或跳出 forEach() 循环。
 如果你需要中止或跳出循环，forEach() 方法不是应当使用的工具。 

 forEach() 为每个数组元素执行一次 callback 函数；与 map() 或者 reduce() 不同的是，它总是返回 undefined 值，并且不可链式调用。其典型用例是在一个调用链的最后执行副作用（side effects，函数式编程上，指函数进行 返回结果值 以外的操作）
 */
