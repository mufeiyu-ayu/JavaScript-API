/* 所有对象（使用 Object.create(null) 创建的对象除外）都将具有 constructor 属性。在没有显式使用构造函数的情况下，创建的对象（例如对象和数组文本）将具有 constructor 属性，这个属性指向该对象的基本对象构造函数类型。 */
let num = 1
let str = 'a'
let fn = () => {}
let obj = { name: 'ada' }
let reg = new RegExp()
let date = new Date()
let array = [1, 2]
// console.log('num', num.constructor) //  ƒ Number() { [native code] }
// console.log('str', str.constructor) // ƒ String() { [native code] }
// console.log('fn', fn.constructor) // ƒ Function() { [native code] }
// console.log('obj', obj.constructor) // ƒ Object() { [native code] }
// console.log('reg', reg.constructor) // ƒ RegExp() { [native code] }
// console.log('date', date.constructor) // ƒ Date() { [native code] }
// console.log('array', array.constructor) // ƒ Array() { [native code] }

function Tree(name) {
    this.name = name
}

const theTree = new Tree('Redwood')
// console.log('theTree.constructor is ' + theTree.constructor) // theTree.constructor is function Tree(name) {this.name = name}
// console.log(undefined.constructor) // 报错没有
// console.log(null.constructor) // 报错没有

let val = null
// val.constructor = 1 // 报错无法设置constructor属性
val = 'abc'
val.constructor = Number
// console.log(val.constructor) // v1.constructor === String
val.foo = 'var1'
console.log(val.foo)
