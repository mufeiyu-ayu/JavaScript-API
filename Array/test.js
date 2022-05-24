// 普通数组求和
const ary1 = [1, 2, 3, 4, 5]
const res1 = ary1.reduce((value, item) => value + item, 0) // 15

// 数组包含对象求和
const ary2 = [{ x: 2 }, { x: 1 }, { x: 3 }, { x: 4 }]
const res2 = ary2.reduce((value, item) => value + item.x, 0) // 10

// 将二维数组转化为一维
const ary3 = [[1], [2], [3], [4]]
const res3 = ary3.reduce((value, item) => value.concat(item), [])

// 计算数组每个元素出现的次数
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice'] //// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
const countNames = names.reduce((allNames, name) => {
    if (name in allNames) {
        allNames[name]++
    } else {
        allNames[name] = 1
    }
    return allNames
}, {})

// 按属性对object分类
let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 15 },
    { name: 'Jane', age: 21 },
    { name: 'Bob', age: 16 },
    { name: 'JACK', age: 15 },
    { name: 'Mike', age: 16 },
    { name: 'Lucy', age: 15 }
]
/* // groupedPeople is:
// {
//   20: [
//     { name: 'Max', age: 20 },
//     { name: 'Jane', age: 20 }
//   ],
//   21: [{ name: 'Alice', age: 21 }]
// } */
function groupedPeople(obj, property) {
    return obj.reduce((arr, item) => {
        let key = item[property] // 21,15,21,16,15
        if (!arr[key]) {
            arr[key] = []
        }
        arr[key].push(item)
        return arr
    }, {})
}

