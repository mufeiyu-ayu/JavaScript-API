/* Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）。 */
// const person = {
//     isHuman: false,
//     printIntroduction: function () {
//         console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`)
//     }
// }
// const me = Object.create(person)
// console.log(me)
// // me.name = 'adada'
// me.isHuman = true
// me.printIntroduction()
// console.log(me.__proto__) // {isHuman: false, printIntroduction: ƒ}

const normalObj = {} // create a normal object
/* 以 null 为原型的对象存在不可预期的行为，因为它未从 Object.prototype 继承任何对象方法。特别是在调试时，因为常见的对象属性的转换/检测工具可能会产生错误或丢失信息（特别是在静默模式，会忽略错误的情况下）。 */
const nullProtoObj = Object.create(null) // create an object with "null" prototype

// console.log('normalObj is: ' + normalObj) // shows "normalObj is: [object Object]"
nullProtoObj.name = 'da'
// console.log(nullProtoObj) // throws error: Cannot convert object to primitive value

// alert(normalObj) // shows [object Object]
// alert(nullProtoObj) // throws error: Cannot convert object to primitive value

// const ages = { alice: 18, bob: 27 }

function hasPerson(name) {
    return name in ages
}

function getAge(name) {
    return ages[name]
}

// hasPerson('hasOwnProperty') // true
// getAge('toString') // [Function: toString]

const ages = Object.create(null, {
    alice: { value: 18, enumerable: true, writable: true },
    bob: { value: 27, enumerable: true },
    sex: { value: 11 }
})
// console.log(ages)

hasPerson('hasOwnProperty') // false
getAge('toString') // undefined

// Shape - superclass
function Shape() {
    this.x = 0
    this.y = 0
}

// superclass method
Shape.prototype.move = function (x, y) {
    this.x += x
    this.y += y
    console.info('Shape moved.')
}

// Rectangle - subclass
function Rectangle() {
    Shape.call(this) // call super constructor.
}

// subclass extends superclass
Rectangle.prototype = Object.create(Shape.prototype)

//If you don't set Rectangle.prototype.constructor to Rectangle,
//it will take the prototype.constructor of Shape (parent).
//To avoid that, we set the prototype.constructor to Rectangle (child).
Rectangle.prototype.constructor = Rectangle

const rect = new Rectangle()

console.log('Is rect an instance of Rectangle?', rect instanceof Rectangle) // true
console.log('Is rect an instance of Shape?', rect instanceof Shape) // true
rect.move(1, 1) // Outputs, 'Shape moved.'
