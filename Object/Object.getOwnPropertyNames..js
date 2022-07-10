// Object.getOwnPropertyNames()方法返回一个由指定对象的所有自身属性的属性名（包括不可枚举属性但不包括 Symbol 值作为名称的属性）组成的数组。
let obj = {
    name: 'ayu',
    age: 22,
    sex: '男'
}
console.log(Object.getOwnPropertyNames(obj)) // ['name', 'age', 'sex']
