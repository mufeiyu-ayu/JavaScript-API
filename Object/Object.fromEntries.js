// Object.fromEntries()方法把键值对列表转换为一个对象。
// Object.fromEntries(iterable); iterable:类似 Array 、 Map 或者其它实现了可迭代协议的可迭代对象。
// Object.fromEntries() 执行与 Object.entries 互逆的操作。
let entryies = [
    ['name', 'ayu'],
    ['age', 22]
]

// map转化为object
let map = new Map(entryies) // Map(2) {'name' => 'ayu', 'age' => 22}
let obj = Object.fromEntries(map)
console.log(obj) // {name:"ayu",age:22}
