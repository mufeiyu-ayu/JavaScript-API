// Object.getOwnPropertyDescriptors() 方法用来获取一个对象的所有自身属性的描述符。
let obj = {
    name: 'ayu',
    age: 22,
    sex: '男'
}
console.log(Object.getOwnPropertyDescriptors(obj)) // {name: {…}, age: {…}, sex: {…}}
