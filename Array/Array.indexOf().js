// indexOf()方法返回在数组中可以找到一个给定元素的第一个索引，如果不存在，则返回-1。
// arr.indexOf(searchElement[, fromIndex])
// 找出指定元素出现的位置
// const array = ['a', 'b', 'a', 'c', 'a', 'd']
// let newArr = []
// const element = 'a' // 找出a位置的索引并存放到数组中
// for (let i = 0; i < array.length; i++) {
//     if (array[i].indexOf(element) !== -1) {
//         newArr.push(i)
//     }
// }
const array = ['a', 'b', 'a', 'c', 'a', 'd']
const newArr = []
const element = 'a'
let index = array.indexOf(element)
while (index != -1) {
    newArr.push(index)
    index = array.indexOf(element, index + 1)
}
console.log(newArr)

const changeArray = (arr, value) => {
    let index = arr.indexOf(value)
    if (index != -1) {
        return index
    } else {
        arr.push(value)
        return arr
    }
}
const res = changeArray([1, 2, 3, 4], 6)
console.log(res)
