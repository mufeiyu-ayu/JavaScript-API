// Array.reduce(callback(value,item,index,arr),initilaValue) // 归纳函数
/* 第一次执行回调函数时，不存在“上一次的计算结果”。如果需要回调函数从数组索引为 0 的元素开始执行，则需要传递初始值。否则，数组索引为 0 的元素将被作为初始值 initialValue，迭代器将从第二个元素开始执行（索引为 1 而不是 0）。 
reducer 逐个遍历数组元素，每一步都将当前元素的值与上一步的计算结果(((相加)))（上一步的计算结果是当前元素之前所有元素的总和）——直到没有更多的元素被相加。
*/

// 1.没有初始值
const ary1 = [1, 2, 3, 4, 5]
// const result1 = ary1.reduce(function (value, item, index, arr) {
//     console.log(value) // 1,3,6,10
//     console.log(item) // 2,3,4,5
//     console.log(index) // 1,2,3,4
//     console.log(arr) //[1,2,3,4,5]
//     return value + item
// })
// console.log(result)

// 2.有初始值
const result2 = ary1.reduce((value, item, index, arr) => {
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
    return [...value, ...item.books]
    /* 这里其实把return的结果保留作为下一次调用的value值，reduce也就是通过这个原理来缓存数据的 */
}, [])

// 使用reduce代替filter.map
const numbers = [-3, -5, 3, 4, 1, 5]
let sum = 0
const ress = numbers
    .filter((item) => item > 0)
    .forEach((item) => {
        sum += item
        // return sum
    })
// console.log(sum) // 13   遍历了2次数组
// reduce改善
const result6 = numbers.reduce((value, item) => {
    if (item > 0) {
        const double = item * 2
    } else {
        item = 0
    }
    return value + item
}, 0)
// console.log(result6) // 13

/**
 * Runs promises from array of functions that can return promises
 * in chained manner
 *
 * @param {array} arr - promise arr
 * @return {Object} promise object
 * 按顺序运行promise，依次拿到结果进行操作
 */
function runPromiseInSequence(arr, input) {
    return arr.reduce((promiseChain, currentFunction) => promiseChain.then(currentFunction), Promise.resolve(input))
}

// promise function 1
function p1(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 5)
    })
}

// 按顺序执行promise promise function 2
function p2(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 2)
    })
}

// function 3  - will be wrapped in a resolved promise by .then()
function f3(a) {
    return a * 3
}

// promise function 4
function p4(a) {
    return new Promise((resolve, reject) => {
        resolve(a * 4)
    })
}

const promiseArr = [p1, p2, f3, p4]
runPromiseInSequence(promiseArr, 10).then(console.log) // 1200

console.log(
    Promise.resolve(300)
        .then(function p4(a) {
            return new Promise((resolve, reject) => {
                resolve(a * 4)
            })
        })
        .then()
)

Promise.resolve(10)
    .then(
        (value) =>
            new Promise((resolve, reject) => {
                resolve(value * 5)
            })
    )
    .then(
        (value) =>
            new Promise((resolve, reject) => {
                resolve(value * 2)
            })
    )
    .then((value) => value * 3)
    .then(
        (value) =>
            new Promise((resolve, reject) => {
                resolve(value * 4)
            })
    )
    .then((value) => {
        // console.log(value) // 1200
    })

// 实现reduce
Array.prototype.myReduce = function (fn, initilaValue) {
    let arr = this,
        len = arr.length,
        arg2 = arguments[2] || window // 增加了this指向的功能
    for (let i = 0; i < len; i++) {
        // 这里也可以使用深拷贝完善封装
        initilaValue = fn.apply(arg2, [initilaValue, arr[i], i, arr])
    }
    return initilaValue
}
const test11 = [1, 2, 3, 4, 5]
const rs111 = test11.myReduce(function (initilaValue, item) {
    return initilaValue + item
}, 0)
// console.log(rs111) //15
