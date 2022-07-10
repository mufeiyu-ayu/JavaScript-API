//Object.defineProperty() 方法会直接在一个对象上定义一个新属性，或者修改一个对象的现有属性，并返回此对象。
const obj = { age: 22 }
console.log(obj)

Object.defineProperty(obj, 'a', {
    configurable: true, // 可配置
    value: 22, // 值
    writable: true, // 可写？
    enumerable: true // 可枚举？
})
console.log(obj)
for (let key in obj) {
    console.log(key)
}
