// Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组，其排列与使用 for...in 循环遍历该对象时返回的顺序一致（区别在于 for-in 循环还会枚举原型链中的属性）。

let obj = {
    name: 'ayu',
    age: 22,
    sayName() {
        console.log('hello my name is :', this.name)
    }
}

for (let [key, value] of Object.entries(obj)) {
    //console.log(`${key}:${value}`) // eg  name:ayu
}
let arr = Object.entries(obj)
// console.log(arr) //  [Array(2), Array(2), Array(2)]

//将Object转换为Map
var obj1 = { foo: 'bar', baz: 42 }
var map = new Map(Object.entries(obj1))
console.log(map) // Map { foo: "bar", baz: 42 }
