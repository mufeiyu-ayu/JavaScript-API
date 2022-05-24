// Array.reduce(callback(value,item,index,arr),initilaValue)
/* 第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。否则，数组索引为 0 的元素将被作为初始值 initialValue，迭代器将从第二个元素开始执行（索引为 1 而不是 0）。 
reducer 逐个遍历数组元素，每一步都将当前元素的值与上一步的计算结果(((相加)))（上一步的计算结果是当前元素之前所有元素的总和）——直到没有更多的元素被相加。
*/

// 1.没有初始值
const ary = [1, 2, 3, 4, 5]
// const result1 = ary.reduce(function (value, item, index, arr) {
//     console.log(value) // 1,3,6,10
//     console.log(item) // 2,3,4,5
//     console.log(index) // 1,2,3,4
//     console.log(arr) //[1,2,3,4,5]
//     return value + item
// })
// console.log(result)

// 2.有初始值
const result2 = ary.reduce((value, item, index, arr) => {
    // console.log(value)  // 10,11,13,16,20
    // console.log(item) // 1,2,3,4,5
    // console.log(index) // 0,1,2,3,4,5
    // console.log(arr) // [1,2,3,4,5]
    return value + item
}, 10)
// console.log(result2) // 25

// 3.求数组对象的和 ,必须指定初始值
const objArray = [{ x: 1 }, { x: 2 }, { x: 3 }, { x: 4 }]
const result3 = objArray.reduce(function (value, item) {
    // console.log(value)
    return value + item.x
}, 0)
// console.log(result3)

//4.数组扁平化
const arr3 = [
    [1, 2],
    [3, 4],
    [5, 6]
]
const result4 = arr3.reduce(function (value, item) {
    return value.concat(item)
})
// console.log(result4) // [ 1, 2, 3, 4, 5, 6 ]

// 5.统计数组每个元素出现次数
const arr4 = ['mike', 'jack', 'alice', 'mike', 'bob', 'mike']

const result5 = arr4.reduce(function (allNames, name) {
    if (name in allNames) {
        allNames[name]++
    } else {
        allNames[name] = 1
    }
    return allNames
}, {})
// console.log(result5) // { mike: 3, jack: 1, alice: 1, bob: 1 }

// 6.按属性对obj进行分类
const people = [
    { name: '张三', age: 18 },
    { name: '李四', age: 20 },
    { name: '小张', age: 24 },
    { name: '小李', age: 18 },
    { name: '小二', age: 20 },
    { name: '小明', age: 11 },
    { name: '赵六', age: 24 }
]
const groundBy = function (obj, property) {
    return obj.reduce(function (acc, obj) {
        let key = obj[property]
        // 如果acc没有这个属性
        if (!acc[key]) {
            acc[key] = [] // 那么我们给这个属性创建一个数组用来存放相同的元素
        }
        acc[key].push(obj)
        return acc
    }, {})
}
// console.log(groundBy(people, 'age'))
/* {
  '11': [ { name: '小明', age: 11 } ],
  '18': [ { name: '张三', age: 18 }, { name: '小李', age: 18 } ],
  '20': [ { name: '李四', age: 20 }, { name: '小二', age: 20 } ],
  '24': [ { name: '小张', age: 24 }, { name: '赵六', age: 24 } ]
} */

let friends = [
    {
        name: 'Anna',
        books: ['Bible', 'Harry Potter'],
        age: 21
    },
    {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet'],
        age: 26
    },
    {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18
    }
]
// const test = function (arr) {
//     const newArr = []
//     for (const item of arr) {
//         for (const value in item) {
//             if (Object.prototype.toString.call(item[value]) === '[object Array]') {
//                 newArr.push(...item[value])
//             }
//         }
//     }
//     return newArr
// }

// 通过reduce以及指定初始值来缓存每一个数组的值
const test1 = friends.reduce(function (value, item) {
    console.log(value)

    return [...value, ...item.books]
    /* 这里其实把return的结果保留作为下一次调用的value值，reduce也就是通过这个原理来缓存数据的 */
}, [])
console.log(test1)
