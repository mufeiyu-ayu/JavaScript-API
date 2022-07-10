// Object.defineProperties() //方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
// 可以修改或定义四个属性
/* 
configurable ：可配置性
enumerable  ： 可枚举性
writabke   ： 可写性
value     : 值
 */
let obj = {}
Object.defineProperties(obj, {
    name: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 33
    },
    age: {
        configurable: true,
        enumerable: true,
        writable: true,
        value: 33
    }
})
console.log(obj)
