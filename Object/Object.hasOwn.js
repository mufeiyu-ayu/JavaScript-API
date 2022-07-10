// Object.hasOwn如果指定的对象具有指定的属性作为其自己的Object.hasOwn()属性，则静态方法返回。如果属性被继承或不存在，则该方法返回。 true ||false
// Object.hasOwn()旨在替代Object.hasOwnProperty().
let obj = {
    name: 'ayu',
    age: 22,
    sex: '男'
}
let fn = () => {}
let num = 11
let str = 'dada'
let reg = new RegExp()
let date = new Date()
let arr = [1, 2, 3]
console.log('对象', obj.__proto__.constructor.__proto__.constructor.__proto__.__proto__) // ƒ Object() { [native code] }
console.log('函数', fn.__proto__.constructor) // ƒ Function() { [native code] }
console.log('字符串', str.__proto__.constructor) // ƒ String() { [native code] }
console.log('数字', num.__proto__.constructor) // ƒ Number() { [native code] }
console.log('正则', reg.__proto__.constructor) // ƒ RegExp() { [native code] }
console.log('时间', date.__proto__.constructor) // ƒ Date(){ [native code] }
console.log('正则', arr.__proto__.constructor) // ƒ  Array()  { [native code] }
let natCode = arr.__proto__.constructor.__proto__
console.log(natCode) // ƒ () { [native code] }
