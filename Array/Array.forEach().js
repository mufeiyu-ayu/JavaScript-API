const arr = [1, 2, 3, 4, 5]
const res = arr.forEach((item, index, arr) => {
    console.log(item, index, arr)
}, arr)
console.log(res) // undefined
console.log(arr)
/*
 除了抛出异常以外，没有办法中止或跳出 forEach() 循环。
 如果你需要中止或跳出循环，forEach() 方法不是应当使用的工具。 
 */


 
