// Object.hasOwn如果指定的对象具有指定的属性作为其自己的Object.hasOwn()属性，则静态方法返回。如果属性被继承或不存在，则该方法返回。 true ||false
// Object.hasOwn()旨在替代Object.hasOwnProperty(). 此方法不检查对象原型链中的指定属性。
let a1 = Symbol('a')
let obj = {
    name: 'ayu',
    age: 22,
    sex: '男',
    a1: 'www'
}
console.log(Object.hasOwn(obj, 'name')) // true
console.log(Object.hasOwn(obj, 'toString')) // false
