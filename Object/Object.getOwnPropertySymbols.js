// Object.getOwnPropertySymbols() 方法返回一个给定对象自身的所有 Symbol 属性的数组。
let obj = {
    name: 'ayu',
    age: 22,
    sex: '男'
}
console.log(Object.getOwnPropertySymbols(obj)) // []
let a1 = Symbol('a1')
let a2 = Symbol('a1')
let a3 = Symbol('a1')
obj[a1] = '3333'
obj[a2] = '2222'
obj[a3] = '1111'
console.log(Object.getOwnPropertySymbols(obj)) // [Symbol(a1), Symbol(a1), Symbol(a1)]
