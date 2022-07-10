/* Object.getOwnPropertyDescriptor() 方法返回指定对象上一个自有属性对应的属性描述符。（自有属性指的是直接赋予该对象的属性，不需要从原型链上进行查找的属性  */
let obj = { name: 'ayu', age: 22 }
console.log(Object.getOwnPropertyDescriptor(obj, 'name'))
// {value: 'ayu', writable: true, enumerable: true, configurable: true}
