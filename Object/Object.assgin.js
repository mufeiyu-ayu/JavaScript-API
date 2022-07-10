let symbol1 = Symbol()
let teacher = {
    name: 'ayu',
    age: 30,
    sayName() {
        console.log('hello')
    },
    symbol: '你好',
    friends: {
        name: 'sasasa'
    }
}
let myobj = Object.assign({}, teacher) // 浅拷贝

// 原型链上的属性和不可枚举属性不能被复制
const obj = Object.create(
    { foo: 1 },
    {
        // foo is on obj's prototype chain.
        bar: {
            value: 2 // bar is a non-enumerable property.
        },
        baz: {
            value: 3,
            enumerable: true // baz is an own enumerable property.
        }
    }
)

const copy = Object.assign({}, obj)
console.log(copy) // { baz: 3 }
